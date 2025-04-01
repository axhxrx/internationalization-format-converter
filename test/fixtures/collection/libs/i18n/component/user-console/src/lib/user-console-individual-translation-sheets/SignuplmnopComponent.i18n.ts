export const translations = {
  SignupLmnopComponent: {
    account_type: {
      caption: { en: `法人としてご利用の場合は契約者情報をご入力ください`,
        ja: `法人としてご利用の場合は契約者情報をご入力ください` },
      label: { en: `契約者情報`, ja: `契約者情報` },
    },
    agency_code: { en: `代理店コード`, ja: `代理店コード` },
    agency_code_placeholder: { en: `最大10文字の半角英数字大文字`, ja: `最大10文字の半角英数字大文字` },
    already: { en: `すでにアカウントをお持ちの場合`, ja: `すでにアカウントをお持ちの場合` },
    caption_g: {
      en:
        `グローバル向け Air SIM が利用できます。<br>日本向け Air SIM を利用する場合は<a href='/signup?coverage_type=jp' class='alert-link'>こちらからご登録ください。</a>`,
      ja:
        `グローバル向け Air SIM が利用できます。<br>日本向け Air SIM を利用する場合は<a href='/signup?coverage_type=jp' class='alert-link'>こちらからご登録ください。</a>`,
    },
    caption_jp: {
      en:
        `日本向け Air SIM が利用できます。<br>グローバル向け Air SIMを利用する場合は<a href='/signup?coverage_type=g' class='alert-link'>こちらからご登録ください。</a>`,
      ja:
        `日本向け Air SIM が利用できます。<br>グローバル向け Air SIMを利用する場合は<a href='/signup?coverage_type=g' class='alert-link'>こちらからご登録ください。</a>`,
    },
    choose_coverage_type: {
      en:
        `SIM をご利用の地域にあわせてカバレッジタイプを選択してください。<br>日本向け Air SIM を利用する場合はカバレッジタイプ Japan を、グローバル向け Air SIM を利用する場合はカバレッジタイプ Global を選択してください。`,
      ja:
        `SIM をご利用の地域にあわせてカバレッジタイプを選択してください。<br>日本向け Air SIM を利用する場合はカバレッジタイプ Japan を、グローバル向け Air SIM を利用する場合はカバレッジタイプ Global を選択してください。`,
    },
    company_code: { en: `拠点コード`, ja: `拠点コード` },
    company_code_placeholder: { en: `最大4文字の半角英数字大文字`, ja: `最大4文字の半角英数字大文字` },
    coverage_type: {
      global: { en: `Global`, ja: `Global` },
      japan: { en: `Japan`, ja: `Japan` },
      iotAccess: { en: `LMNOP IoT アクセス`, ja: `LMNOP IoT アクセス` },
      title: { en: `サービスエリア区分`, ja: `サービスエリア区分` },
    },
    create: { en: `申込む`, ja: `申込む` },
    create_help: { en: `入力内容に不備があります`, ja: `入力内容に不備があります` },
    currently_only_in_japan: {
      en: '',
      ja: '',
    },
    email: { en: `メールアドレス`, ja: `メールアドレス` },
    full_name_label: { en: `名前`, ja: `名前` },
    full_name_placeholder: { en: `氏名を入力してください`, ja: `氏名を入力してください` },
    header: { en: `QUORACOMM オペレーター登録`, ja: `QUORACOMM オペレーター登録` },
    lmnop_department_code: { en: `実績部門コード`, ja: `実績部門コード` },
    lmnop_department_code_help: { en: `沖縄セルラー電話の場合は、半角英数大文字で "OCT" と入力してください。`,
      ja: `沖縄セルラー電話の場合は、半角英数大文字で "OCT" と入力してください。` },
    lmnop_staff_code: { en: `社員コード`, ja: `社員コード` },
    lmnop_staff_code_placeholder: { en: `最大10文字の半角英数字大文字`, ja: `最大10文字の半角英数字大文字` },
    lmnop_staff_phone: { en: `社員電話番号`, ja: `社員電話番号` },
    login: { en: `ログイン`, ja: `ログイン` },
    person_code: { en: `担当者コード`, ja: `担当者コード` },
    person_code_placeholder: { en: `最大10文字の半角英数字大文字`, ja: `最大10文字の半角英数字大文字` },
    LmnopgcpPlanCode: {
      title: { en: `料金プラン`, ja: `料金プラン` },
      flat10MB: { en: `10MB内包プラン`, ja: `10MB内包プラン` },
      flat: { en: `内包プラン`, ja: `内包プラン` },
      payAsYouGo: { en: `従量プラン`, ja: `従量プラン` },
    },
    preconditions: {
      en:
        `これは LMNOP 担当者専用の申込ページです。<br>メールアドレスがユーザコンソール利用においてのログインIDとなります。`,
      ja:
        `これは LMNOP 担当者専用の申込ページです。<br>メールアドレスがユーザコンソール利用においてのログインIDとなります。`,
    },
    required: { en: `は必須項目です`, ja: `は必須項目です` },
    signup_with_global_coverage: { en: `カバレッジタイプ Global`, ja: `カバレッジタイプ Global` },
    signup_with_jp_coverage: { en: `カバレッジタイプ Japan`, ja: `カバレッジタイプ Japan` },
    validations: {
      lmnopgcp_plan_code: {
        invalid: { en: `料金プランを選択してください`, ja: `料金プランを選択してください` },
      },
      agency_code: {
        invalid: { en: `代理店コードが正しくありません`, ja: `代理店コードが正しくありません` },
      },
      company_code: {
        invalid: { en: `拠点コードが正しくありません`, ja: `拠点コードが正しくありません` },
      },
      person_code: {
        invalid: { en: `担当者コードが正しくありません`, ja: `担当者コードが正しくありません` },
      },
    },
    address_line_1: { en: `住所（町名まで）`, ja: `住所（町名まで）` },
    address_line_1_placeholder: { en: `（例）玉川`, ja: `（例）玉川` },
    address_line_2: { en: `住所（番地以降）`, ja: `住所（番地以降）` },
    address_line_2_placeholder: { en: `（例）4-5-6`, ja: `（例）4-5-6` },
    building: { en: `建物名`, ja: `建物名` },
    building_placeholder: { en: `（例）ABCビル 2F`, ja: `（例）ABCビル 2F` },
    city: { en: `市区町村`, ja: `市区町村` },
    city_placeholder: { en: `（例）世田谷区`, ja: `（例）世田谷区` },
    company_name: { en: `企業名`, ja: `企業名` },
    contact_person_name: { en: `担当者名`, ja: `担当者名` },
    department: { en: `部署名`, ja: `部署名` },
    payment_method: {
      bank_transfer: { en: `請求書払い`, ja: `請求書払い` },
      credit_card: { en: `クレジットカード（法人）`, ja: `クレジットカード（法人）` },
      direct_debit: { en: `口座振替`, ja: `口座振替` },
      title: { en: `支払方法`, ja: `支払方法` },
    },
    phone_number: { en: `電話番号`, ja: `電話番号` },
    phone_number_help: { en: `電話番号に使える文字は 0 〜 9 までの数字と -, +, *, # および半角スペースです。`,
      ja: `電話番号に使える文字は 0 〜 9 までの数字と -, +, *, # および半角スペースです。` },
    state: { en: `都道府県`, ja: `都道府県` },
    state_placeholder: { en: `（例）東京都`, ja: `（例）東京都` },
    zip_code: { en: `郵便番号`, ja: `郵便番号` },
    zip_code_help: { en: `郵便番号を入力すると、都道府県、市区町村、住所（町名まで）が自動的に入力されます。`,
      ja: `郵便番号を入力すると、都道府県、市区町村、住所（町名まで）が自動的に入力されます。` },
  },
};
