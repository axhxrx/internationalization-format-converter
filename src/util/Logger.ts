/**
Logger categories for type-safe topic filtering.
Add new categories here as needed.
*/
export type LogCategory =
  | 'AST'
  | 'BATCH'
  | 'CLI'
  | 'PARSER'
  | 'FORMATTER'
  | 'EXPORT'
  | 'IMPORT'
  | 'GENERAL';

// Log levels
export type LogLevel =
  | 'DEBUG'
  | 'INFO'
  | 'WARN'
  | 'ERROR';

// Interface for a log entry
export interface LogEntry
{
  timestamp: Date;
  level: LogLevel;
  category: LogCategory;
  message: string;
  data?: unknown;
}

/**
In-memory logger that accumulates log messages with category-based filtering.
Use the global instance exported as `logger` for application-wide logging.
*/
export class Logger
{
  private entries: LogEntry[] = [];

  /**
   If either `Logger.useConsoleAlso` has been set to `true`, or environment variable `LOGGER_SHOULD_USE_CONSOLE_ALSO` is set to '1' or 'true',
   `console.log()`, `console.warn()`, etc will also be called. This option exists for debugging.
   */
  static get useConsoleAlso()
  {
    return this._useConsoleAlso
      || Deno.env.get('LOGGER_SHOULD_USE_CONSOLE_ALSO') === '1'
      || Deno.env.get('LOGGER_SHOULD_USE_CONSOLE_ALSO') === 'true';
  }

  static set useConsoleAlso(value: boolean)
  {
    this._useConsoleAlso = value;
  }

  private static _useConsoleAlso = false;

  /**
   Log a debug message
   */
  debug(category: LogCategory, message: string, data?: unknown): void
  {
    this.log('DEBUG', category, message, data);
  }

  /**
   Log an info message
   */
  info(category: LogCategory, message: string, data?: unknown): void
  {
    this.log('INFO', category, message, data);
  }

  /**
   Log a warning message
   */
  warn(category: LogCategory, message: string, data?: unknown): void
  {
    this.log('WARN', category, message, data);
  }

  /**
   Log an error message, and also console.error() it.
   */
  error(category: LogCategory, message: string, data?: unknown): void
  {
    this.log('ERROR', category, message, data);
  }

  /**
   Internal method to add a log entry
   */
  private log(level: LogLevel, category: LogCategory, message: string, data?: unknown): void
  {
    this.entries.push({
      timestamp: new Date(),
      level,
      category,
      message,
      data,
    });

    if (Logger.useConsoleAlso)
    {
      if (level === 'ERROR')
      {
        console.error(message, data);
      }
      else if (level === 'WARN')
      {
        console.warn(message, data);
      }
      else if (level === 'INFO')
      {
        console.info(message, data);
      }
      else if (level === 'DEBUG')
      {
        console.debug(message, data);
      }
    }
  }

  /**
   Get all log entries
   */
  getEntries(): LogEntry[]
  {
    return [...this.entries];
  }

  /**
   Filter log entries by category
   */
  getEntriesByCategory(category: LogCategory): LogEntry[]
  {
    return this.entries.filter(entry => entry.category === category);
  }

  /**
   Filter log entries by log level
   */
  getEntriesByLevel(level: LogLevel): LogEntry[]
  {
    return this.entries.filter(entry => entry.level === level);
  }

  /**
   Filter log entries by both category and level
   */
  getEntriesByCategoryAndLevel(category: LogCategory, level: LogLevel): LogEntry[]
  {
    return this.entries.filter(entry => entry.category === category && entry.level === level);
  }

  /**
   Clear all log entries
   */
  clear(): void
  {
    this.entries = [];
  }

  /**
   Print all log entries to console
   */
  print(): void
  {
    this.entries.forEach(this.printEntry);
  }

  /**
   Print log entries filtered by category
   */
  printByCategory(category: LogCategory): void
  {
    this.getEntriesByCategory(category).forEach(this.printEntry);
  }

  /**
   Print log entries filtered by level
   */
  printByLevel(level: LogLevel): void
  {
    this.getEntriesByLevel(level).forEach(this.printEntry);
  }

  /**
   Convert all log entries to a string
   */
  toString(): string
  {
    return this.entriesToString(this.entries);
  }

  /**
   Convert log entries filtered by category to a string
   */
  toStringByCategory(category: LogCategory): string
  {
    return this.entriesToString(this.getEntriesByCategory(category));
  }

  /**
   Convert log entries filtered by level to a string
   */
  toStringByLevel(level: LogLevel): string
  {
    return this.entriesToString(this.getEntriesByLevel(level));
  }

  /**
   Convert specified log entries to a string
   */
  private entriesToString(entries: LogEntry[]): string
  {
    return entries.map(entry =>
    {
      const timestamp = entry.timestamp.toISOString();
      const level = entry.level.padEnd(5);
      const category = entry.category.padEnd(10);
      let result = `[${timestamp}] [${level}] [${category}] ${entry.message}`;

      if (entry.data !== undefined)
      {
        result += '\n' + JSON.stringify(entry.data, null, 2);
      }

      return result;
    }).join('\n');
  }

  /**
   Print a single log entry
   */
  private printEntry(entry: LogEntry): void
  {
    const timestamp = entry.timestamp.toISOString();
    const level = entry.level.padEnd(5);
    const category = entry.category.padEnd(10);

    console.log(`[${timestamp}] [${level}] [${category}] ${entry.message}`);

    if (entry.data !== undefined)
    {
      console.log(entry.data);
    }
  }
}

// Global logger instance
export const logger = new Logger();

// Default export for convenience
export default logger;
