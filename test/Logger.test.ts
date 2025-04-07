import { assertEquals } from '@std/assert';
import { type LogEntry, Logger } from '../src/util/Logger.ts';

Deno.test('Logger creates and filters entries by category', () =>
{
  const logger = new Logger();

  // Add logs with different categories
  logger.debug('AST', 'AST debug message');
  logger.info('CLI', 'CLI info message');
  logger.warn('PARSER', 'PARSER warning message');
  logger.error('FORMATTER', 'FORMATTER error message');

  // Get all entries
  const allEntries = logger.getEntries();
  assertEquals(allEntries.length, 4);

  // Filter by category
  const astEntries = logger.getEntriesByCategory('AST');
  assertEquals(astEntries.length, 1);
  assertEquals(astEntries[0].message, 'AST debug message');
  assertEquals(astEntries[0].category, 'AST');

  const cliEntries = logger.getEntriesByCategory('CLI');
  assertEquals(cliEntries.length, 1);
  assertEquals(cliEntries[0].message, 'CLI info message');

  // Category with no entries
  const exportEntries = logger.getEntriesByCategory('EXPORT');
  assertEquals(exportEntries.length, 0);
});

Deno.test('Logger filters entries by log level', () =>
{
  const logger = new Logger();

  // Add logs with different levels
  logger.debug('AST', 'Debug message 1');
  logger.debug('CLI', 'Debug message 2');
  logger.info('AST', 'Info message');
  logger.warn('CLI', 'Warning message');
  logger.error('PARSER', 'Error message');

  // Filter by level
  const debugEntries = logger.getEntriesByLevel('DEBUG');
  assertEquals(debugEntries.length, 2);
  assertEquals(debugEntries[0].level, 'DEBUG');
  assertEquals(debugEntries[1].level, 'DEBUG');

  const infoEntries = logger.getEntriesByLevel('INFO');
  assertEquals(infoEntries.length, 1);
  assertEquals(infoEntries[0].message, 'Info message');

  const errorEntries = logger.getEntriesByLevel('ERROR');
  assertEquals(errorEntries.length, 1);
  assertEquals(errorEntries[0].category, 'PARSER');
});

Deno.test('Logger filters entries by both category and level', () =>
{
  const logger = new Logger();

  // Add logs with different combinations
  logger.debug('AST', 'AST debug 1');
  logger.debug('AST', 'AST debug 2');
  logger.info('AST', 'AST info');
  logger.debug('CLI', 'CLI debug');
  logger.warn('CLI', 'CLI warning');

  // Filter by both category and level
  const astDebugEntries = logger.getEntriesByCategoryAndLevel('AST', 'DEBUG');
  assertEquals(astDebugEntries.length, 2);

  const cliWarnEntries = logger.getEntriesByCategoryAndLevel('CLI', 'WARN');
  assertEquals(cliWarnEntries.length, 1);
  assertEquals(cliWarnEntries[0].message, 'CLI warning');

  // No matches for this combination
  const parserErrorEntries = logger.getEntriesByCategoryAndLevel('PARSER', 'ERROR');
  assertEquals(parserErrorEntries.length, 0);
});

Deno.test('Logger clear method removes all entries', () =>
{
  const logger = new Logger();

  // Add some logs
  logger.debug('AST', 'Test message 1');
  logger.info('CLI', 'Test message 2');

  assertEquals(logger.getEntries().length, 2);

  // Clear logs
  logger.clear();

  // Verify logs are cleared
  assertEquals(logger.getEntries().length, 0);
});

Deno.test('Logger logs with data object', () =>
{
  const logger = new Logger();
  const testData = { id: 123, name: 'test' };

  logger.debug('AST', 'Message with data', testData);

  const entries = logger.getEntries();
  assertEquals(entries.length, 1);
  assertEquals(entries[0].data, testData);
});

Deno.test('Logger converts entries to string', () =>
{
  const logger = new Logger();

  // Create a log entry with controlled timestamp
  const entry: LogEntry = {
    timestamp: new Date('2025-03-23T10:00:00.000Z'),
    level: 'INFO',
    category: 'CLI',
    message: 'String conversion test',
  };

  // Manually add the entry to bypass the automatic timestamp
  logger['entries'] = [entry];

  // Convert to string
  const logString = logger.toString();

  // Verify string format
  const expected = '[2025-03-23T10:00:00.000Z] [INFO ] [CLI       ] String conversion test';
  assertEquals(logString, expected);
});

Deno.test('Logger filters string output by category', () =>
{
  const logger = new Logger();

  // Manually create entries with fixed timestamps
  const entries: LogEntry[] = [
    {
      timestamp: new Date('2025-03-23T10:00:00.000Z'),
      level: 'DEBUG',
      category: 'AST',
      message: 'AST message',
    },
    {
      timestamp: new Date('2025-03-23T10:00:00.000Z'),
      level: 'INFO',
      category: 'CLI',
      message: 'CLI message',
    },
  ];

  // Set entries directly
  logger['entries'] = entries;

  // Get string for specific category
  const astString = logger.toStringByCategory('AST');

  // Verify filtered string
  const expected = '[2025-03-23T10:00:00.000Z] [DEBUG] [AST       ] AST message';
  assertEquals(astString, expected);

  // Verify CLI category is not included
  assertEquals(astString.includes('CLI message'), false);
});
