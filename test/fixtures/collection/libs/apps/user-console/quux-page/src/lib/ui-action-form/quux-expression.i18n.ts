export const QuuxExpressionI18n = {
  label: {
    operator: { en: 'Operator', ja: '演算子' },
    variable: { en: 'Variable', ja: '変数' },
    function: { en: 'Function', ja: '関数' },
  },
  operator: {
    '||': {
      en: 'Logical OR: Returns <code>true</code> if either of the conditions is <code>true</code>.',
      ja: '論理和: どちらかの条件が <code>true</code> の場合、<code>true</code> を返します。',
    },
    '&&': {
      en: 'Logical AND: Returns <code>true</code> if both conditions are <code>true</code>.',
      ja: '論理積: 両方の条件が <code>true</code> の場合、<code>true</code> を返します。',
    },
    '? :': {
      en:
        'Conditional (ternary) operator: Used as <code>a ? b : c</code>, it returns <code>b</code> if the condition <code>a</code> evaluates to true, and <code>c</code> if it evaluates to false. Example: <code>payload.click_type == 1 ? "Single click" : "Double click"</code>.',
      ja:
        '条件（三項）演算子: <code>a ? b : c</code> のように用い、条件 <code>a</code> を評価した結果が <code>true</code> の場合は <code>b</code> を、<code>false</code> の場合は <code>c</code> を返します。例: <code>payload.click_type == 1 ? "Single click" : "Double click"</code>。',
    },
    '==': {
      en: 'Equal: Returns <code>true</code> if the values are equal.',
      ja: '等しい: 値が等しい場合、<code>true</code> を返します。',
    },
    '!=': {
      en: 'Not equal: Returns <code>true</code> if the values are not equal.',
      ja: '等しくない: 値が等しくない場合、<code>true</code> を返します。',
    },
    '>=': {
      en:
        'Greater than or equal to: Returns <code>true</code> if the left value is greater than or equal to the right value.',
      ja: '以上: 左の値が右の値以上の場合、<code>true</code> を返します。',
    },
    '>': {
      en: 'Greater than: Returns <code>true</code> if the left value is greater than the right value.',
      ja: 'より大きい: 左の値が右の値より大きい場合、<code>true</code> を返します。',
    },
    '<=': {
      en:
        'Less than or equal to: Returns <code>true</code> if the left value is less than or equal to the right value.',
      ja: '以下: 左の値が右の値以下の場合、<code>true</code> を返します。',
    },
    '<': {
      en: 'Less than: Returns <code>true</code> if the left value is less than the right value.',
      ja: 'より小さい: 左の値が右の値より小さい場合、<code>true</code> を返します。',
    },
    '+': {
      en: 'Addition: Returns the sum of the two values.',
      ja: '加算: 2つの値の合計を返します。',
    },
    '-': {
      en: 'Subtraction: Returns the difference between the two values.',
      ja: '減算: 2つの値の差を返します。',
    },
    '*': {
      en: 'Multiplication: Returns the product of the two values.',
      ja: '乗算: 2つの値の積を返します。',
    },
    '/': {
      en: 'Division: Returns the quotient of the two values.',
      ja: '除算: 2つの値の商を返します。',
    },
    '%': {
      en: 'Modulus: Returns the remainder of the division of the left value by the right value.',
      ja: '剰余: 左の値を右の値で割った余りを返します。',
    },
    '**': {
      en: 'Exponentiation: Returns the result of raising the left value to the power of the right value.',
      ja: '累乗: 左の値を右の値乗した結果を返します。',
    },
  },
  function: {
    includes: {
      en: 'Determines if a string contains another string and returns <code>true</code> or <code>false</code>.',
      ja:
        '指定された文字列が別の文字列を含んでいるかどうかを判断し、<code>true</code> か <code>false</code> を返します。',
    },
    startsWith: {
      en:
        'Determines if a string starts with a specified substring and returns <code>true</code> or <code>false</code>.',
      ja: '指定された部分文字列で始まるかどうかを判断し、<code>true</code> か <code>false</code> を返します。',
    },
    endsWith: {
      en: 'Determines if a string ends with a specified substring and returns <code>true</code> or <code>false</code>.',
      ja: '指定された部分文字列で終わるかどうかを判断し、<code>true</code> か <code>false</code> を返します。',
    },
    toLowerCase: {
      en: 'Converts a string to lowercase.',
      ja: '文字列を小文字に変換します。',
    },
    toUpperCase: {
      en: 'Converts a string to uppercase.',
      ja: '文字列を大文字に変換します。',
    },
    now: {
      en: 'Returns the current UNIX time in milliseconds.',
      ja: '現在の時刻を UNIX ミリ秒で返します。',
    },
    datetime: {
      en: 'Converts an ISO 8601 string to UNIX time in milliseconds.',
      ja: 'ISO 8601 形式の文字列を UNIX ミリ秒に変換します。',
    },
    getUTCYear: {
      en: 'Returns the year from a UNIX time in milliseconds or ISO 8601 string in Coordinated Universal Time (UTC).',
      ja: 'UNIX ミリ秒 または ISO 8601 形式の文字列から、世界協定時 (UTC) の「年」を取得します。',
    },
    getUTCMonth: {
      en: 'Returns the month from a UNIX time in milliseconds or ISO 8601 string in Coordinated Universal Time (UTC).',
      ja: 'UNIX ミリ秒 または ISO 8601 形式の文字列から、世界協定時 (UTC) の「月」を取得します。',
    },
    getUTCDate: {
      en: 'Returns the day from a UNIX time in milliseconds or ISO 8601 string in Coordinated Universal Time (UTC).',
      ja: 'UNIX ミリ秒 または ISO 8601 形式の文字列から、世界協定時 (UTC) の「日」を取得します。',
    },
    getUTCHours: {
      en: 'Returns the hour from a UNIX time in milliseconds or ISO 8601 string in Coordinated Universal Time (UTC).',
      ja: 'UNIX ミリ秒 または ISO 8601 形式の文字列から、世界協定時 (UTC) の「時」を取得します。',
    },
    getUTCMinutes: {
      en:
        'Returns the minutes from a UNIX time in milliseconds or ISO 8601 string in Coordinated Universal Time (UTC).',
      ja: 'UNIX ミリ秒 または ISO 8601 形式の文字列から、世界協定時 (UTC) の「分」を取得します。',
    },
    getUTCSeconds: {
      en:
        'Returns the seconds from a UNIX time in milliseconds or ISO 8601 string in Coordinated Universal Time (UTC).',
      ja: 'UNIX ミリ秒 または ISO 8601 形式の文字列から、世界協定時 (UTC) の「秒」を取得します。',
    },
    getUTCMilliseconds: {
      en:
        'Returns the milliseconds from a UNIX time in milliseconds or ISO 8601 string in Coordinated Universal Time (UTC).',
      ja: 'UNIX ミリ秒 または ISO 8601 形式の文字列から、世界協定時 (UTC) の「ミリ秒」を取得します。',
    },
    getUTCDayOfWeek: {
      en:
        'Returns the day of the week as a number from 0 to 6 in Coordinated Universal Time (UTC) from a UNIX millisecond timestamp or an ISO 8601 formatted string. 0 is Sunday, 1 is Monday.',
      ja:
        'UNIX ミリ秒 または ISO 8601 形式の文字列から、世界協定時 (UTC) での曜日を 0 - 6 の数字として返します。0 が日曜日で、1 が月曜日です。',
    },
    addSeconds: {
      ja:
        '１つ目の引数に指定された UNIX ミリ秒 または ISO 8601 形式の文字列に、２つ目の引数に指定された秒数を加算します。',
      en:
        'Adds the number of seconds specified in the second argument to the UNIX time in milliseconds or ISO 8601 formatted string specified in the first argument.',
    },
    addMinutes: {
      en:
        'Adds the number of minutes specified in the second argument to the UNIX time in milliseconds or ISO 8601 formatted string specified in the first argument.',
      ja:
        '１つ目の引数に指定された UNIX ミリ秒 または ISO 8601 形式の文字列に、２つ目の引数に指定された分数を加算します。',
    },
    addHours: {
      en:
        'Adds the number of hours specified in the second argument to the UNIX time in milliseconds or ISO 8601 formatted string specified in the first argument.',
      ja:
        '１つ目の引数に指定された UNIX ミリ秒 または ISO 8601 形式の文字列に、２つ目の引数に指定された時間数を加算します。',
    },
    addDays: {
      en:
        'Adds the number of days specified in the second argument to the UNIX time in milliseconds or ISO 8601 formatted string specified in the first argument.',
      ja:
        '１つ目の引数に指定された UNIX ミリ秒 または ISO 8601 形式の文字列に、２つ目の引数に指定された日数を加算します。',
    },
    addMonths: {
      en:
        'Adds the number of months specified in the second argument to the UNIX time in milliseconds or ISO 8601 formatted string specified in the first argument.',
      ja:
        '１つ目の引数に指定された UNIX ミリ秒 または ISO 8601 形式の文字列に、２つ目の引数に指定された月数を加算します。',
    },
    addYears: {
      en:
        'Adds the number of years specified in the second argument to the UNIX time in milliseconds or ISO 8601 formatted string specified in the first argument.',
      ja:
        '１つ目の引数に指定された UNIX ミリ秒 または ISO 8601 形式の文字列に、２つ目の引数に指定された年数を加算します。',
    },
    toNumber: {
      ja: '文字列を数値に変換します',
      en: 'Converts a string to a number',
    },
    toString: {
      ja: '数値を文字列に変換します',
      en: 'Converts a number to a string',
    },
    abs: {
      ja: '数値の絶対値を返します',
      en: 'Returns the absolute value',
    },
    ceil: {
      ja: '数値を切り上げます',
      en: 'Rounds a number up',
    },
    floor: {
      ja: '数値を切り捨てます',
      en: 'Rounds a number down',
    },
    round: {
      ja: '数値を四捨五入します',
      en: 'Rounds a number to the nearest integer',
    },
    max: {
      ja: '指定した 2 つの数値のうち、大きい方を返します',
      en: 'Return the larger of two numbers',
    },
    min: {
      ja: '指定した 2 つの数値のうち、小さい方を返します',
      en: 'Return the smaller of two numbers',
    },
    len: {
      ja: '文字列または配列の長さを返します。文字列の長さは Unicode のコードポイント数として計測されます。',
      en:
        'Returns the length of a string or array. The length of a string is measured in terms of the number of Unicode code points.',
    },
    int: {
      en: 'Converts a string or number to an integer. If it is a decimal, the fractional part is truncated.',
      ja: '文字列または数値を整数に変換します。少数の場合端数は切り捨てます',
    },
  },
  variable: {
    payload: {
      en:
        'The content of the message being processed. If it is a JSON object, you can access values inside it using expressions like <span class="--code">payload.temperature</span> or <span class="--code">payload.values[1].foo["click type"]</span>. If it is not a JSON object, `payload` is treated as a string.',
      ja:
        '処理中のメッセージの内容です。JSON オブジェクトの場合は <span class="--code">payload.temperature</span> や <span class="--code">payload.values[1].foo["click type"]</span> のようにして値を取り出すことができます。JSON オブジェクトでない場合は、`payload` は文字列として扱われます。',
    },
    context: {
      en:
        'JSON object corresponding to the context of the message being processed. The schema of the object varies depending on the event type.',
      ja:
        '処理中のメッセージのコンテキストに対応する JSON オブジェクトです。オブジェクトのスキーマはイベントタイプごとに異なります。',
    },
    'event.payload': {
      en:
        'The content of the message sent from the event source. When processing the initial channel message sent from the event source, it is the same as <span class="--code">payload</span>. When processing the message output by an action, you can retrieve the original message sent by the event source.',
      ja:
        'イベントソースから送信されたメッセージの内容です。イベントソースから最初に送信されたチャネルのメッセージを処理する場合は、<span class="--code">payload</span> と同じです。アクションが出力したメッセージを処理する場合には、イベントソースが送信したオリジナルのメッセージを取得できます。',
    },
    'event.context': {
      en: 'JSON object corresponding to the context of the message sent from the event source.',
      ja: 'イベントソースから送信されたメッセージのコンテキストに対応する JSON オブジェクトです。',
    },
  },
} as const;
