export const i18n = {
  title: {
    quoraCamAnnualPayment: {
      en: 'Quoracomm Cloud Camera Services Annual Payment Limited Preview',
      ja: 'Quoracomm Cloud Camera Services 一括年払い Limited Preview',
    },
    quoraCamLiveStreaming: {
      en: 'Quoracomm Cloud Camera Services (QuoraKamm) Live Streaming Limited Preview',
      ja: 'Quoracomm Cloud Camera Services (ソラカメ) ライブ視聴見放題 Limited Preview',
    },
  },

  already_enabled_notice: {
    message: {
      en: 'QuoraKamm Annual Payment Limited Preview is already enabled',
      ja: 'ソラカメ 一括年払い Limited Preview が有効です',
    },
    link: {
      en: 'You can use the feature via the license management page',
      ja: 'ライセンス管理画面からご利用いただけます',
    },
  },

  closed_notice: {
    en: 'New applications for Limited Preview have been closed. Please wait for the official release.',
    ja: 'Limited Preview の新規受付は締め切りました。正式リリースをお待ち下さい。',
  },

  only_root_user_notice: {
    en: 'Only the root user can use this form to apply',
    ja: 'ソラカメ 一括年払い Limited Preview の申請はルートユーザで行ってください。',
  },

  explanation: {
    title: {
      en: 'About',
      ja: '概要',
    },
    content: {
      en:
        'An application is required to use the Limited Preview. We cannot guarantee all applications will be accepted, as it based on the content of the application and the total number of applicants. Details of this feature will be provided to customers who are accepted to the Limited Preview.',
      ja:
        'Limited Preview の利用には申し込みが必要です。申請内容にもとづき、適用の可否を検討させていただきます。本機能の詳細は Limited Preview の適用準備ができたお客様に順次お知らせいたします。',
    },
  },

  form: {
    title: {
      en: 'Application Form',
      ja: 'お申し込み',
    },
    description: {
      en:
        'The registered subscriber information is being reflected. If the person in charge of this Limited Preview is different from the subscriber, please correct the content of the form.',
      ja:
        '登録されている契約者情報を反映しています。本 Limited Preview の担当者が契約者と異なる場合はフォームの内容を修正してください',
    },
    basic_info: {
      en: 'Basic Information',
      ja: '基本情報',
    },
    company_name: {
      en: 'Company Name',
      ja: '会社名',
    },
    company_postcode: {
      en: 'Postal Code',
      ja: '郵便番号',
    },
    company_address: {
      en: 'Address',
      ja: '住所',
    },
    applicant_info: {
      en: 'Applicant Information',
      ja: 'ご担当者様情報',
    },
    name: {
      en: 'Full Name',
      ja: '氏名',
    },
    kana: {
      en: 'Full Name (kana)',
      ja: '氏名（カナ）',
    },
    division: {
      en: 'Department',
      ja: '部署',
    },
    email: {
      en: 'Email Address',
      ja: 'メールアドレス',
    },
    phone: {
      en: 'Phone Number',
      ja: '電話番号',
    },
    operator_id: {
      en: 'Operator ID',
      ja: 'オペレーター ID',
    },
    operator_email: {
      en: "Operator's Email Address",
      ja: 'オペレーターのメールアドレス',
    },
    limited_preview_info: {
      en: 'Information about the application',
      ja: 'Limited Preview お申し込みのための情報',
    },
    feature: {
      en: 'Feature',
      ja: 'ご利用機能',
    },
    background_text: {
      en: 'Could you share why you have interest to access this limited preview program?',
      ja: 'ご利用の目的、背景',
    },
    usecase_text: {
      en: 'Could you share your use case for our API?',
      ja: 'ユースケース、システム概要',
    },
    quoracomm_bd: {
      en: 'Sales representative interacting with you',
      ja: '相談しているソラコム担当者名（いる場合のみご記入ください）',
    },
  },
  tos_and_privacy_policy_checkbox: {
    en:
      `I agree with the above, <a href="https://quoracomm.jp/files/terms/quoracomm-cloud-camera-services-terms_ja-jp.pdf" target="_blank">the terms of service (Japanese)</a> and <a href='https://quoracomm.jp/share/privacy/contractant_privacy/' target='_blank'>Privacy Policy</a>`,
    ja:
      `申し込みにあたり、<a href="https://quoracomm.jp/share/privacy/" target="_blank" rel="noopener">個人情報の取り扱い</a>および<a
    href="https://quoracomm.jp/share/terms/" target="_blank" rel="noopener">契約約款</a>を確認しました。`,
  },
  submit: {
    en: 'Submit form',
    ja: '申し込む',
  },

  success_message: {
    en: 'Your application has been received. An email has been sent to the email address you entered.',
    ja: '申し込みを受け付けました。入力したメールアドレスに受付完了メールを送信しました。',
  },
  error_message: {
    en:
      'Your application could not be processed. Please try again after a while. If the problem persists, please contact support.',
    ja:
      '申し込みを受け付けられませんでした。お手数ですが、時間をおいて再度お試しください。解消されない場合はサポートまでお問い合わせください。',
  },
} as const;
