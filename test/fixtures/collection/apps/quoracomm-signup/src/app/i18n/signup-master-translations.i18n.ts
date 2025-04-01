export const translations = {
  header: {
    title: { en: `User Console`, ja: `ユーザーコンソール` },
  },
  button: {
    back: { en: `Back`, ja: `戻る` },
  },
  signup: {
    steps: {
      accountTypeRegion: {
        en: `Choose account type/region`,
        ja: `基本情報を選択`,
      },
      accountDetails: { en: `Create account`, ja: `アカウントを作成` },
      verifyEmail: { en: `Verify your email`, ja: `メールアドレスの認証` },
      contactDetails: { en: `Enter contact details`, ja: `契約者情報を入力` },
      accountSubmitted: {
        en: `Account submission complete`,
        ja: `アカウント作成完了`,
      },
    },
    language: { en: `Choose language`, ja: `言語を選択` },
  },
  signupAccountTypeRegion: {
    title: {
      en: `Sign up for Quoracomm`,
      ja: `QUORACOMM アカウント (オペレーター) 登録`,
    },
    subtitle: {
      en:
        `Create your Quoracomm account to begin building your IoT application. Use the web console and API to manage your SIMs, build dashboards, configure private networks, and connect your devices to the cloud.`,
      ja: `QUORACOMM サービスを利用するには、オペレーターを作成します。`,
    },
    label: {
      accountType: { en: `Account type`, ja: `契約者情報` },
      accountIndividual: { en: `Individual account`, ja: `個人として利用` },
      accountEnterprise: { en: `Business account`, ja: `法人として利用` },
      currency: { en: `Billing currency`, ja: `課金通貨` },
      country: { en: `Your country`, ja: `国` },
      countryNotListed: {
        en: `Country not listed?`,
        ja: `お住まいの国が見つからない場合は`,
      },
    },
    countryAccountTypeCannotChangeInfo: {
      en:
        `Please note that once your account has been created, you will not be able to change the account type, country, or billing currency.`,
      ja: `オペレーター登録後に、契約者情報 (個人/法人)、 国、課金通貨を変更することはできません。`,
    },
    findoutMore: { en: `Contact sales`, ja: `お問い合わせください` },
    contactUsUrl: {
      en: `https://www.example.com/contact/`,
      ja: `https://quoracomm.jp/contact/`,
    },
    missingCanadaStatesWarning: {
      en:
        `If your business is located in Manitoba or Sasketchewan, please <a href='https://www.example.com/contact' target='_blank'>contact us</a> in order to create your account.`,
      ja:
        `アカウントの作成を希望される マニトバ州 もしくは サスカチュワン州 のお客様は、セールスまで<a href='https://quoracomm.jp/contact/' target='_blank'>お問い合わせ</a>ください。`,
    },
    coverage: {
      coverageTypeTitle: { en: `Coverage type`, ja: `カバレッジタイプ` },
      coverageTypeSubtitle: {
        en:
          `Quoracomm provides two coverage options in Japan. Select the coverage where you plan to use your devices. For more information, <a href="https://developers.example.com/en/docs/air/sim-types/">click here.</a> <br/><br/> You can also add coverage after creating your account.`,
        ja:
          `カバレッジタイプを選択します。たとえば、plan-D など特定地域向け IoT SIM を利用する場合は「日本カバレッジ」を選択します。また、plan01s など QUORACOMM IoT SIM を利用する場合は「グローバルカバレッジ」を選択します。詳しくは、<a href="https://users.example.com/ja-jp/guides/getting-started/change-coverage-type/" target="_blank" rel="external noopener noreferrer">カバレッジタイプ (Coverage Type) とは</a> を参照してください。<a href="https://quora-kamm.com/" target="_blank">ソラカメ</a>を利用する場合は「日本カバレッジ」を選択します。`,
      },
      coverageTypeNotification: {
        en: `Coverage type can be added or switched after the account is created`,
        ja: `カバレッジタイプはアカウント作成後にも追加したり、切り替えたりできます。`,
      },
      coverageJapan: { en: `Japan`, ja: `日本カバレッジ` },
      coverageGlobal: { en: `Global`, ja: `グローバルカバレッジ` },
      japanDescription: {
        en: `Coverage in Japan on Minnesota Telegraph Corp  (3G, 4G/LTE) and bv/LMNOP (4G/LTE, LTE Cat-M1)`,
        ja:
          `日本国内で Minnesota Telegraph Corp  (3G, 4G/LTE)、asdhjdhjhd (4G/LTE, LTE Cat-M1)、Squignox、ソラカメを利用できます。`,
      },
      globalDescription: {
        en: `Coverage in over 160 countries (2G, 3G, 4G/LTE) including Japan`,
        ja:
          `日本を含む 160 を超える国と地域で IoT SIM を利用できます (2G, 3G, 4G/LTE)。また、50 を超える国と地域で Squignox を利用できます。`,
      },
    },
    region: {
      individualDescription: {
        en: `For personal, non-commercial use. Available only in selected countries.`,
        ja: `QUORACOMM サービスを個人で利用します。個人の場合、一部の国では利用できません。`,
      },
      enterpriseDescription: {
        en: `For business or commercial use. Credit card and invoice options are available.`,
        ja: `QUORACOMM サービスを法人や団体などで利用します。クレジットカードと請求書のオプションが利用可能です。`,
      },
    },
    button: {
      continue: { en: `Continue`, ja: `次へ` },
    },
  },
  countrySelect: {
    firstOption: { en: `Select country`, ja: `国を選択` },
  },
  signupCreateAccount: {
    title: { en: `Create your account`, ja: `アカウントを作成` },
    subtitle: {
      regular: {
        en: `Enter your email address and set a password for your Quoracomm account.`,
        ja: `ログインに必要な情報を入力してください`,
      },
      distributor: {
        en:
          `Quoracomm services in {{ country }} are provided by our Premium Regional Distributor <b>{{ distributor }}.</b>`,
        ja:
          `{{ country }}においては、ソラコムの Premium Regional Distributor である {{ distributor }} がサービスを提供しています。`,
      },
    },
    label: {
      email: { en: `Email`, ja: `メールアドレス` },
      password: { en: `Password`, ja: `パスワード` },
      referralCode: { en: `Referral code`, ja: `紹介者コード` },
    },
    commonApiError: {
      en: `There was some error from API when creating account`,
      ja: `サーバーとの通信でエラーが発生しました。`,
    },
    accountWithContactInfoAlreadyExists: {
      en:
        `The email address you entered ({{ email }}) is already in use. Please <a href="{{ loginUrl }}">login</a> or enter new email address and continue.`,
      ja:
        `入力されたメールアドレス（{{ email }}）はすでに登録されています。<a href="{{ loginUrl }}">ログイン</a>するか、別のメールアドレスを入力してください`,
    },
    passwordValidation: {
      oneLowerCaseRequired: {
        en: `At least one lowercase (a-z)`,
        ja: `1文字以上の半角英小文字 (a-z) を含む`,
      },
      oneUpperCaseRequired: {
        en: `At least one uppercase (A-Z)`,
        ja: `1文字以上の半角英大文字 (A-Z) を含む`,
      },
      oneNumberRequired: {
        en: `At least one number (0-9)`,
        ja: `1文字以上の半角数字 (0-9) を含む`,
      },
      minlength: { en: `Minimum of 8 characters`, ja: `最低 8 文字以上` },
    },
    emailSubscriptionAgreement: {
      en: `I want to receive email notifications from Quoracomm about new products and services.`,
      ja: `ソラコムからの新製品/新サービスなどのお知らせをメールで受け取る。`,
    },
    button: {
      continue: { en: `Continue`, ja: `次へ` },
    },
    validation: {
      email: {
        required: {
          en: `Email is required.`,
          ja: `メールアドレスを入力してください。`,
        },
        email: {
          en: `Entered email is invalid.`,
          ja: `メールアドレスが正しいか確認してください。`,
        },
      },
    },
  },
  verifyEmail: {
    title: { en: `Verify your email`, ja: `メールアドレスの認証` },
    subtitle: {
      en:
        `We sent a one-time password to {{ email }}. Please enter the 6-digit code below to verify your email address.`,
      ja:
        `{{ email }} 宛にワンタイムパスワードが記載されたメールを送信しました。メールにある 6桁の数字を入力してください。`,
    },
    notSeeingEmail: {
      en: `Didn't receive an email? Check your spam folder, or`,
      ja: `メールが届かない場合、迷惑メールフォルダに振り分けられていないか今一度ご確認ください。`,
    },
    verify: { en: `Verify`, ja: `確認` },
    resendOtp: {
      label1: {
        en: `Didn't receive an email?`,
        ja: `メールが確認できない場合: `,
      },
      label2: { en: `send another code`, ja: `メールを再送する` },
    },
    validation: {
      required: {
        en: `Code is required.`,
        ja: `ワンタイムパスワードを入力してください。`,
      },
      pattern: {
        en: `Code must be 6 digit numbers.`,
        ja: `ワンタイムパスワードは6桁の半角数字です。`,
      },
    },
    commonApiError: {
      en: `There was some unknown error from API`,
      ja: `サーバーとの通信でエラーが発生しました。`,
    },
  },
  contactDetails: {
    title: {
      individual: { en: `Contact details`, ja: `契約者情報` },
      enterprise: { en: `Company details`, ja: `契約者情報` },
    },
    helpText: {
      companyName: {
        en: `Please ensure the company name you have entered is the official name.`,
        ja: `入力した会社名が正式な名前であることを確認してください。`,
      },
    },
    label: {
      contactPersonName: { en: `Contact name`, ja: `名前` },
      fullName: { en: `Name`, ja: `名前` },
      companyName: { en: `Company name`, ja: `企業名` },
      department: { en: `Department`, ja: `部署名` },
      phoneNumber: { en: `Telephone number`, ja: `電話番号` },
      address: { en: `Address`, ja: `住所` },
      buildingName: { en: `Building name`, ja: `建物名` },
      prefecture: { en: `Prefecture`, ja: `都道府県` },
      city: { en: `City`, ja: `市区町村` },
      addressLine2: { en: `Address line 2`, ja: `住所（番地以降）` },
      addressLine1: { en: `Address line 1`, ja: `住所（町名まで）` },
      cityMunicipality: { en: `City/Municipality`, ja: `City/Municipality` },
      statePrefecture: { en: `State/Prefecture`, ja: `State/Prefecture` },
      numberLaneStreetName: {
        en: `Number, Lane, Street name`,
        ja: `Number, Lane, Street name`,
      },
      townshipDistrict: { en: `Township/District`, ja: `Township/District` },
      countyCity: { en: `County/City`, ja: `County/City` },
      streetAddress: { en: `Street address`, ja: `Street address` },
      streetNumberName: {
        en: `Street number and name`,
        ja: `Street number and name`,
      },
      suburb: { en: `Suburb`, ja: `Suburb` },
      cityTown: { en: `Town/City`, ja: `Town/City` },
      cityOrSuburb: { en: `City/Suburb`, ja: `City/Suburb` },
      flatAndFloorNo: {
        en: `Flat and floor number`,
        ja: `Flat and floor number`,
      },
      buildingNoAndStreet: {
        en: `Building number and street`,
        ja: `Building number and street`,
      },
      buildingNameFloorFlat: {
        en: `Building name, floor and flat number`,
        ja: `Building name, floor and flat number`,
      },
      townOrDistrict: {
        en: `Village, town or district`,
        ja: `Village, town or district`,
      },
      territory: { en: `Territory`, ja: `Territory` },
      streetNameAndNo: {
        en: `Street name and number`,
        ja: `Street name and number`,
      },
      state: { en: `State`, ja: `State` },
      postCode: { en: `Postcode`, ja: `郵便番号` },
      country: { en: `Country`, ja: `国` },
      vatIdNumber: { en: `VAT ID number`, ja: `VAT ID number` },
      zipCode: { en: `ZIP code`, ja: `ZIP code` },
      jpZipCodeHelpText: {
        en:
          `By providing postal code here, State, City and Address (name of town) will be automatically filled in (for addresses in Japan).`,
        ja: `郵便番号を入力すると、都道府県、市区町村、住所（町名まで）が自動的に入力されます。`,
      },
    },
    AU: {
      state: {
        ACT: {
          en: `Australian Capital Territory`,
          ja: `Australian Capital Territory`,
        },
        NSW: { en: `New South Wales`, ja: `New South Wales` },
        NT: { en: `Northern Territory`, ja: `Northern Territory` },
        QLD: { en: `Queensland`, ja: `Queensland` },
        SA: { en: `South Australia`, ja: `South Australia` },
        TAS: { en: `Tasmania`, ja: `Tasmania` },
        VIC: { en: `Victoria`, ja: `Victoria` },
        WA: { en: `Western Australia`, ja: `Western Australia` },
      },
    },
    CA: {
      state: {
        Alberta: { en: `Alberta`, ja: `Alberta` },
        BritishColumbia: { en: `British Columbia`, ja: `British Columbia` },
        NewBrunswick: { en: `New Brunswick`, ja: `New Brunswick` },
        NewfoundlandAndLabrador: {
          en: `Newfoundland and Labrador`,
          ja: `Newfoundland and Labrador`,
        },
        NorthwestTerritories: {
          en: `Northwest Territories`,
          ja: `Northwest Territories`,
        },
        NovaScotia: { en: `Nova Scotia`, ja: `Nova Scotia` },
        Nunavut: { en: `Nunavut`, ja: `Nunavut` },
        Ontario: { en: `Ontario`, ja: `Ontario` },
        PrinceEdwardIsland: {
          en: `Prince Edward Island`,
          ja: `Prince Edward Island`,
        },
        Quebec: { en: `Quebec`, ja: `Quebec` },
        Yukon: { en: `Yukon`, ja: `Yukon` },
      },
    },
    HK: {
      territory: {
        hongkong: { en: `Hong Kong`, ja: `Hong Kong` },
        kowloon: { en: `Kowloon`, ja: `Kowloon` },
        newTerritories: { en: `New Territories`, ja: `New Territories` },
      },
    },
    MO: {
      territory: {
        macau: { en: `Macau Peninisula`, ja: `Macau Peninisula` },
        taipa: { en: `Taipa`, ja: `Taipa` },
        coloanel: { en: `Coloanel`, ja: `Coloanel` },
        cotai: { en: `Cotai`, ja: `Cotai` },
      },
    },
    US: {
      state: {
        AL: { en: `Alabama`, ja: `Alabama` },
        AK: { en: `Alaska`, ja: `Alaska` },
        AZ: { en: `Arizona`, ja: `Arizona` },
        AR: { en: `Arkansas`, ja: `Arkansas` },
        CA: { en: `California`, ja: `California` },
        CO: { en: `Colorado`, ja: `Colorado` },
        CT: { en: `Connecticut`, ja: `Connecticut` },
        DE: { en: `Delaware`, ja: `Delaware` },
        DC: { en: `District of Columbia`, ja: `District of Columbia` },
        FL: { en: `Florida`, ja: `Florida` },
        GA: { en: `Georgia`, ja: `Georgia` },
        HI: { en: `Hawaii`, ja: `Hawaii` },
        ID: { en: `Idaho`, ja: `Idaho` },
        IL: { en: `Illinois`, ja: `Illinois` },
        IN: { en: `Indiana`, ja: `Indiana` },
        IA: { en: `Iowa`, ja: `Iowa` },
        KS: { en: `Kansas`, ja: `Kansas` },
        KY: { en: `Kentucky`, ja: `Kentucky` },
        LA: { en: `Louisiana`, ja: `Louisiana` },
        ME: { en: `Maine`, ja: `Maine` },
        MD: { en: `Maryland`, ja: `Maryland` },
        MA: { en: `Massachusetts`, ja: `Massachusetts` },
        MI: { en: `Michigan`, ja: `Michigan` },
        MN: { en: `Minnesota`, ja: `Minnesota` },
        MS: { en: `Mississippi`, ja: `Mississippi` },
        MO: { en: `Missouri`, ja: `Missouri` },
        MT: { en: `Montana`, ja: `Montana` },
        NE: { en: `Nebraska`, ja: `Nebraska` },
        NV: { en: `Nevada`, ja: `Nevada` },
        NH: { en: `New Hampshire`, ja: `New Hampshire` },
        NJ: { en: `New Jersey`, ja: `New Jersey` },
        NM: { en: `New Mexico`, ja: `New Mexico` },
        NY: { en: `New York`, ja: `New York` },
        NC: { en: `North Carolina`, ja: `North Carolina` },
        ND: { en: `North Dakota`, ja: `North Dakota` },
        OH: { en: `Ohio`, ja: `Ohio` },
        OK: { en: `Oklahoma`, ja: `Oklahoma` },
        OR: { en: `Oregon`, ja: `Oregon` },
        PA: { en: `Pennsylvania`, ja: `Pennsylvania` },
        RI: { en: `Rhode Island`, ja: `Rhode Island` },
        SC: { en: `South Carolina`, ja: `South Carolina` },
        SD: { en: `South Dakota`, ja: `South Dakota` },
        TN: { en: `Tennessee`, ja: `Tennessee` },
        TX: { en: `Texas`, ja: `Texas` },
        UT: { en: `Utah`, ja: `Utah` },
        VT: { en: `Vermont`, ja: `Vermont` },
        VA: { en: `Virginia`, ja: `Virginia` },
        WA: { en: `Washington`, ja: `Washington` },
        WV: { en: `West Virginia`, ja: `West Virginia` },
        WI: { en: `Wisconsin`, ja: `Wisconsin` },
        WY: { en: `Wyoming`, ja: `Wyoming` },
        Alabama: { en: `Alabama`, ja: `Alabama` },
        Alaska: { en: `Alaska`, ja: `Alaska` },
        Arizona: { en: `Arizona`, ja: `Arizona` },
        Arkansas: { en: `Arkansas`, ja: `Arkansas` },
        California: { en: `California`, ja: `California` },
        Colorado: { en: `Colorado`, ja: `Colorado` },
        Connecticut: { en: `Connecticut`, ja: `Connecticut` },
        Delaware: { en: `Delaware`, ja: `Delaware` },
        WashingtonDC: {
          en: `District of Columbia`,
          ja: `District of Columbia`,
        },
        Florida: { en: `Florida`, ja: `Florida` },
        Georgia: { en: `Georgia`, ja: `Georgia` },
        Hawaii: { en: `Hawaii`, ja: `Hawaii` },
        Idaho: { en: `Idaho`, ja: `Idaho` },
        Indiana: { en: `Indiana`, ja: `Indiana` },
        Illinois: { en: `Illinois`, ja: `Illinois` },
        Iowa: { en: `Iowa`, ja: `Iowa` },
        Kansas: { en: `Kansas`, ja: `Kansas` },
        Kentucky: { en: `Kentucky`, ja: `Kentucky` },
        Louisiana: { en: `Louisiana`, ja: `Louisiana` },
        Maine: { en: `Maine`, ja: `Maine` },
        Maryland: { en: `Maryland`, ja: `Maryland` },
        Massachusetts: { en: `Massachusetts`, ja: `Massachusetts` },
        Michigan: { en: `Michigan`, ja: `Michigan` },
        Minnesota: { en: `Minnesota`, ja: `Minnesota` },
        Mississippi: { en: `Mississippi`, ja: `Mississippi` },
        Missouri: { en: `Missouri`, ja: `Missouri` },
        Montana: { en: `Montana`, ja: `Montana` },
        Nebraska: { en: `Nebraska`, ja: `Nebraska` },
        Nevada: { en: `Nevada`, ja: `Nevada` },
        NewJersey: { en: `New Jersey`, ja: `New Jersey` },
        NewHampshire: { en: `New Hampshire`, ja: `New Hampshire` },
        NewMexico: { en: `New Mexico`, ja: `New Mexico` },
        NewYork: { en: `New York`, ja: `New York` },
        NorthCarolina: { en: `North Carolina`, ja: `North Carolina` },
        NorthDakota: { en: `North Dakota`, ja: `North Dakota` },
        Ohio: { en: `Ohio`, ja: `Ohio` },
        Oklahoma: { en: `Oklahoma`, ja: `Oklahoma` },
        Oregon: { en: `Oregon`, ja: `Oregon` },
        Pennsylvania: { en: `Pennsylvania`, ja: `Pennsylvania` },
        RhodeIsland: { en: `Rhode Island`, ja: `Rhode Island` },
        SouthCarolina: { en: `South Carolina`, ja: `South Carolina` },
        SouthDakota: { en: `South Dakota`, ja: `South Dakota` },
        Tennessee: { en: `Tennessee`, ja: `Tennessee` },
        Texas: { en: `Texas`, ja: `Texas` },
        Utah: { en: `Utah`, ja: `Utah` },
        Vermont: { en: `Vermont`, ja: `Vermont` },
        Virginia: { en: `Virginia`, ja: `Virginia` },
        Washington: { en: `Washington`, ja: `Washington` },
        WestVirginia: { en: `West Virginia`, ja: `West Virginia` },
        Wisconsin: { en: `Wisconsin`, ja: `Wisconsin` },
        Wyoming: { en: `Wyoming`, ja: `Wyoming` },
      },
    },
    button: {
      createAccount: { en: `Create account`, ja: `アカウントを作成` },
    },
    validation: {
      contactPersonName: {
        required: {
          en: `Contact name is required.`,
          ja: `Contact name is required.`,
        },
      },
      fullName: {
        required: { en: `Name is required.`, ja: `Name is required.` },
      },
      companyName: {
        required: {
          en: `Company name is required.`,
          ja: `Company name is required.`,
        },
      },
      department: {
        required: {
          en: `Department is required.`,
          ja: `Department is required.`,
        },
      },
      phoneNumber: {
        required: {
          en: `Telephone number is required.`,
          ja: `Telephone number is required.`,
        },
      },
      addressLine1: {
        required: { en: `Address is required.`, ja: `Address is required.` },
      },
      addressLine2: {
        required: {
          en: `Address Line 2 is required.`,
          ja: `Address Line 2 is required.`,
        },
      },
      city: {
        required: { en: `City is required.`, ja: `City is required.` },
      },
      cityOrSuburb: {
        required: {
          en: `City/Suburb is required.`,
          ja: `City/Suburb is required.`,
        },
      },
      streetNumberName: {
        required: {
          en: `Street number and name is required.`,
          ja: `Street number and name is required.`,
        },
      },
      buildingNoAndStreet: {
        required: {
          en: `Building number and street is required.`,
          ja: `Building number and street is required.`,
        },
      },
      townOrDistrict: {
        required: {
          en: `Village, town or district is required.`,
          ja: `Village, town or district is required.`,
        },
      },
      flatAndFloorNo: {
        required: {
          en: `Flat and floor number is required.`,
          ja: `Flat and floor number is required.`,
        },
      },
      numberLaneStreetName: {
        required: {
          en: `Number, Lane, Street name is required.`,
          ja: `Number, Lane, Street name is required.`,
        },
      },
      streetAddress: {
        required: {
          en: `Street address is required.`,
          ja: `Street address is required.`,
        },
      },
      buildingName: {
        required: {
          en: `Building name is required`,
          ja: `Building name is required`,
        },
      },
      cityMunicipality: {
        required: {
          en: `City/Municipality is required`,
          ja: `City/Municipality is required`,
        },
      },
      buildingNameFloorFlat: {
        required: {
          en: `Building name, floor and flat number is required.`,
          ja: `Building name, floor and flat number is required.`,
        },
      },
      cityTown: {
        required: {
          en: `Town/City is required.`,
          ja: `Town/City is required.`,
        },
      },
      streetNameAndNo: {
        required: {
          en: `Street name and number is required.`,
          ja: `Street name and number is required.`,
        },
      },
      townshipDistrict: {
        required: {
          en: `Township/District is required.`,
          ja: `Township/District is required.`,
        },
      },
      countyCity: {
        required: {
          en: `County/City is required.`,
          ja: `County/City is required.`,
        },
      },
      state: {
        required: { en: `State is required.`, ja: `State is required.` },
      },
      statePrefecture: {
        required: {
          en: `State/Prefecture is required.`,
          ja: `State/Prefecture is required.`,
        },
      },
      prefecture: {
        required: {
          en: `Prefecture is required.`,
          ja: `Prefecture is required.`,
        },
      },
      postCode: {
        required: { en: `Postcode is required.`, ja: `Postcode is required.` },
        pattern: { en: `Postcode is invalid.`, ja: `Postcode is invalid.` },
      },
      zipCode: {
        required: { en: `Zipcode is required.`, ja: `Zipcode is required.` },
        pattern: { en: `Zipcode is invalid.`, ja: `Zipcode is invalid.` },
      },
      vatIdNumber: {
        required: { en: `VAT ID is required.`, ja: `VAT Idを入力してください` },
      },
      jp: {
        postCode: {
          required: {
            en: `Postcode is required.`,
            ja: `郵便番号を入力してください`,
          },
          pattern: {
            en: `Postcode is invalid.`,
            ja: `郵便番号を半角数字で入力してください`,
          },
          maxlength: {
            en: `Postcode must not be more than 7 digits.`,
            ja: `郵便番号が正しいか確認してください`,
          },
          minlength: {
            en: `Postcode must be of 7 digits.`,
            ja: `郵便番号が正しいか確認してください`,
          },
        },
      },
    },
    commonApiError: {
      en: `There was some error from API`,
      ja: `サーバーとの通信でエラーが発生しました。`,
    },
  },
  accountConfirm: {
    title: { en: `Thanks!`, ja: `ありがとうございます！` },
    distributorMessage: {
      en:
        `Your account will be reviewed shortly. Our Premium Regional Distributor <b>{{ distributor }}</b> may contact you for additional verifications.<br><br>Once approved, you will receive an email with login instructions.<br><br>If you do not receive an email from us within 3 business days, please contact us.`,
      ja:
        `あなたのアカウントはまもなく審査されます。Premium Regional Distributor の<b>{{distributor}}</b>から、確認のためにご連絡させていただく場合があります。<br><br>承認されると、ログイン方法を記載したメールが届きます。<br><br>3営業日以内にメールが届かない場合は、お手数ですがお問い合わせください。`,
    },
    normalMessage: {
      en:
        `Your account is ready. You can now sign in to your account and begin using the console.<br><br>You will automatically be redirected to login page in {{ time }} seconds.`,
      ja: `アカウントが作成されました。<br><br>{{ time }}秒後に自動的にサインインページにリダイレクトされます。`,
    },
  },
  tos: {
    tosDetails: {
      eu: {
        en:
          `<p>By continuing, you agree to Quoracomm's <a class="toc" href='https://www.example.com/terms/eu/' target='_blank'>Terms and Conditions for Global Service</a> and <a href='https://www.example.com/privacy-policy-for-eu/' target='_blank'>Privacy Policy</a>, and agree to use Quoracomm Air SIM cards only in accordance with the applicable laws and regulations of the jurisdiction(s) in which they are used.</p>`,
        ja:
          `<p>登録を進めると、<a href='https://www.example.com/terms/eu/' target='_blank'>QUORACOMM Global 利用規約</a>及び<a href='https://www.example.com/privacy-policy-for-eu/' target-'_blank'>プライバシーポリシー</a>に同意したことになります。</p><p>QUORACOMM Airの利用に際しては、ご利用になる国や地域の法律の範囲内であることを事前にご確認ください。</p>`,
      },
      jp: {
        en:
          `<p>By continuing, you agree to Quoracomm's <a class="toc" href='https://quoracomm.jp/share/terms/' target='_blank'>Terms and Conditions</a> and <a href='https://www.example.com/privacy-policy/' target='_blank'>Privacy Policy.</a></p><p>Before using Quoracomm Air, please ensure the following:<br><br>When using a Quoracomm Air plan-D or plan-DU SIM, the equipment using the SIM card must be certified to conform to the relevant technical standards, or must meet all radio equipment requirements of a foreign telecommunications carrier that is <a href='https://www.example.com/corporate/disclosure/mvno/user/index.html' target='_blank'>a roaming partner of Minnesota Telegraph Corp QoQoHo</a>.<br><br>When using a Quoracomm Air plan-K or plan-KM1 SIM, the equipment using the SIM card must be certified to conform to the relevant technical standards as described on the LMNOP website.</p>`,
        ja:
          `<p>登録を進めると、<a href='https://quoracomm.jp/share/terms/' target='_blank'>QUORACOMM 利用規約</a>及び<a href='https://www.example.com/privacy-policy/' target='_blank'>プライバシーポリシー</a>に同意したことになります。</p><p>QUORACOMM Air の利用に際しては、以下についてご確認ください。<br>plan-D または plan-DUの場合、SIM カードを利用する機器が技術基準適合証明等を受けていること、あるいは <a href='https://www.example.com/corporate/disclosure/mvno/user/index.html' target='_blank'>Minnesota Telegraph Corp のローミングパートナー</a>である外国の電気通信事業者の無線局の無線設備であることを事前にご確認ください。<br>plan-K または plan-KM1 の場合、SIM カードを利用する機器が技術基準適合証明等を受けていることを事前にご確認ください。LMNOP の Web サイトでの動作確認済み機器を確認することを推奨しています。</p>`,
      },
      jp_coverage: {
        en:
          `<p>By continuing, you agree to Quoracomm's <a class="toc" href='https://quoracomm.jp/share/terms/' target='_blank'>Terms and Conditions</a> and <a href='https://quoracomm.jp/share/privacy/contractant_privacy/' target='_blank'>Privacy Policy.</a></p><p>Before using Quoracomm Air, please ensure the following:<br><br>When using a Quoracomm Air plan-D or plan-DU SIM, the equipment using the SIM card must be certified to conform to the relevant technical standards, or must meet all radio equipment requirements of a foreign telecommunications carrier that is <a href='https://www.example.com/corporate/disclosure/mvno/user/index.html' target='_blank'>a roaming partner of Minnesota Telegraph Corp QoQoHo</a>.<br><br>When using a Quoracomm Air plan-K or plan-KM1 SIM, the equipment using the SIM card must be certified to conform to the relevant technical standards as described on the LMNOP website.</p>`,
        ja:
          `<p>登録を進めると、<a href='https://quoracomm.jp/share/terms/' target='_blank'>QUORACOMM 利用規約</a>及び<a href='https://quoracomm.jp/share/privacy/contractant_privacy/' target='_blank'>プライバシーポリシー</a>に同意したことになります。</p><p>QUORACOMM Air の利用に際しては、以下についてご確認ください。<br>plan-D または plan-DUの場合、SIM カードを利用する機器が技術基準適合証明等を受けていること、あるいは <a href='https://www.example.com/corporate/disclosure/mvno/user/index.html' target='_blank'>Minnesota Telegraph Corp のローミングパートナー</a>である外国の電気通信事業者の無線局の無線設備であることを事前にご確認ください。<br>plan-K または plan-KM1 の場合、SIM カードを利用する機器が技術基準適合証明等を受けていることを事前にご確認ください。LMNOP の Web サイトでの動作確認済み機器を確認することを推奨しています。</p>`,
      },
      us: {
        en:
          `<p>By continuing, you agree to Quoracomm's <a class="toc" href='https://www.example.com/terms/us/' target='_blank'>Terms and Conditions for Global Service</a> and <a href='https://www.example.com/privacy-policy/' target='_blank'>Privacy Policy</a>, and agree to use Quoracomm Air SIM cards only in accordance with the applicable laws and regulations of the jurisdiction(s) in which they are used.</p>`,
        ja:
          `<p>登録を進めると、<a href='https://www.example.com/terms/us/' target='_blank'>QUORACOMM Global 利用規約</a>及び<a href='https://www.example.com/privacy-policy/' target='_blank'>プライバシーポリシー</a>に同意したことになります。</p><p>QUORACOMM Airの利用に際しては、ご利用になる国や地域の法律の範囲内であることを事前にご確認ください。</p>`,
      },
      unknown: {
        en:
          `<p>By continuing, you agree to Quoracomm's <a class="toc" href='https://www.example.com/terms/' target='_blank'>Terms and Conditions for Global Service</a> and <a href='https://www.example.com/privacy-policy/' target='_blank'>Privacy Policy</a>, and agree to use Quoracomm Air SIM cards only in accordance with the applicable laws and regulations of the jurisdiction(s) in which they are used.</p>`,
        ja:
          `<p>登録を進めると、<a href='https://www.example.com/terms/' target='_blank'>QUORACOMM Global 利用規約</a>及び<a href='https://www.example.com/privacy-policy/' target='_blank'>プライバシーポリシー</a>に同意したことになります。</p><p>QUORACOMM Airの利用に際しては、ご利用になる国や地域の法律の範囲内であることを事前にご確認ください。</p>`,
      },
      other: {
        en:
          `<p>By continuing, you agree to Quoracomm's <a class="toc" href='https://www.example.com/terms/other/' target='_blank'>Terms and Conditions for Global Service</a> and <a href='https://www.example.com/privacy-policy/' target='_blank'>Privacy Policy</a>, and agree to use Quoracomm Air SIM cards only in accordance with the applicable laws and regulations of the jurisdiction(s) in which they are used.</p>`,
        ja:
          `<p>登録を進めると、<a href='https://www.example.com/terms/other/' target='_blank'>QUORACOMM Global 利用規約</a>及び<a href='https://www.example.com/privacy-policy/' target='_blank'>プライバシーポリシー</a>に同意したことになります。</p><p>QUORACOMM Airの利用に際しては、ご利用になる国や地域の法律の範囲内であることを事前にご確認ください。</p>`,
      },
      distributor: {
        en:
          `<p>Please note that it is {{distributor}}, not Quoracomm, that is responsible for providing the services to you.</p>`,
        ja:
          `<p>約款の記載にかかわらず、お客様へのサービス提供者は{{distributor}}であり、同社がお客様へのサービス提供について責任を負います。</p>`,
      },
    },
    termsAndConditions: {
      eu: {
        en:
          `I agree to Quoracomm's Terms and Conditions and Privacy Policy, and I will comply with all applicable regulations.`,
        ja: `QUORACOMM Global 利用規約及びプライバシーポリシーに同意し、該当法規について確認しました`,
      },
      us: {
        en:
          `I agree to Quoracomm's Terms and Conditions and Privacy Policy, and I will comply with all applicable regulations.`,
        ja: `QUORACOMM Global 利用規約及びプライバシーポリシーに同意し、該当法規について確認しました`,
      },
      other: {
        en:
          `I agree to Quoracomm's Terms and Conditions and Privacy Policy, and I will comply with all applicable regulations.`,
        ja: `QUORACOMM Global 利用規約及びプライバシーポリシーに同意し、該当法規について確認しました`,
      },
      unknown: {
        en:
          `I agree to Quoracomm's Terms and Conditions and Privacy Policy, and I will comply with all applicable regulations.`,
        ja: `QUORACOMM Global 利用規約及びプライバシーポリシーに同意し、該当法規について確認しました`,
      },
      jp: {
        en:
          `I agree to Quoracomm's Terms and Conditions and Privacy Policy, and I will comply with all applicable regulations.`,
        ja: `QUORACOMM 利用規約及びプライバシーポリシーに同意し、技術基準適合証明等について確認しました`,
      },
    },
    minorTerms: {
      jp: {
        en:
          `I affirm that the contractor and/or user(s) of this service are not minors, or, if minors are to use this service, I acknowledge that in principle it is necessary to use a <a href='https://quoracomm.jp/share/filtering_service' target='_blank'>filtering service</a>. I hereby agree that any usage by minors contrary to this guideline shall only occur with the informed consent of a parent or legal guardian.`,
        ja:
          `契約者および使用者が青少年ではない、もしくは青少年が使用する場合原則<a href='https://quoracomm.jp/share/filtering_service' target='_blank'>フィルタリングサービス</a>の利用が必要であることを確認しました。フィルタリングサービスを利用しない場合、この確認をもって保護者として「利用しない」旨の申出とします。`,
      },
    },
  },
  countries: {
    AL: { en: `Albania`, ja: `アルバニア` },
    AT: { en: `Austria`, ja: `オーストリア` },
    AU: { en: `Australia`, ja: `オーストラリア` },
    BA: { en: `Bosnia and Herzegovina`, ja: `ボスニア・ヘルツェゴビナ` },
    BE: { en: `Belgium`, ja: `ベルギー` },
    BG: { en: `Bulgaria`, ja: `ブルガリア` },
    CA: { en: `Canada`, ja: `カナダ` },
    CH: { en: `Switzerland`, ja: `スイス` },
    CN: { en: `China`, ja: `中国` },
    country: { en: `Country`, ja: `国や地域を選択...` },
    CY: { en: `Cyprus`, ja: `キプロス` },
    CZ: { en: `Czech Republic`, ja: `チェコ` },
    DE: { en: `Germany`, ja: `ドイツ` },
    default_country_code_for_this_locale: { en: `US`, ja: `JP` },
    DK: { en: `Denmark`, ja: `デンマーク` },
    EE: { en: `Estonia`, ja: `エストニア` },
    ES: { en: `Spain`, ja: `スペイン` },
    FI: { en: `Finland`, ja: `フィンランド` },
    FR: { en: `France`, ja: `フランス` },
    GB: { en: `United Kingdom`, ja: `イギリス` },
    GR: { en: `Greece`, ja: `ギリシャ` },
    HK: { en: `Hong Kong`, ja: `香港` },
    HR: { en: `Croatia`, ja: `クロアチア` },
    HU: { en: `Hungary`, ja: `ハンガリー` },
    ID: { en: `Indonesia`, ja: `インドネシア` },
    IE: { en: `Ireland`, ja: `アイルランド` },
    IN: { en: `India`, ja: `インド` },
    IS: { en: `Iceland`, ja: `アイスランド` },
    IT: { en: `Italy`, ja: `イタリア` },
    JP: { en: `Japan`, ja: `日本` },
    LI: { en: `Liechtenstein`, ja: `リヒテンシュタイン` },
    LT: { en: `Lithuania`, ja: `リトアニア` },
    LU: { en: `Luxembourg`, ja: `ルクセンブルグ` },
    LV: { en: `Latvia`, ja: `ラトビア` },
    ME: { en: `Montenegro`, ja: `モンテネグロ` },
    MK: { en: `Macedonia (Republic of)`, ja: `北マケドニア` },
    MO: { en: `Macau`, ja: `マカオ` },
    MT: { en: `Malta`, ja: `マルタ` },
    MU: { en: `Mauritius`, ja: `モーリシャス` },
    MY: { en: `Malaysia`, ja: `マレーシア` },
    NL: { en: `Netherlands`, ja: `オランダ` },
    NO: { en: `Norway`, ja: `ノルウェー` },
    NZ: { en: `New Zealand`, ja: `ニュージーランド` },
    PL: { en: `Poland`, ja: `ポーランド` },
    PT: { en: `Portugal`, ja: `ポルトガル` },
    RO: { en: `Romania`, ja: `ルーマニア` },
    RS: { en: `Serbia`, ja: `セルビア` },
    SE: { en: `Sweden`, ja: `スウェーデン` },
    SG: { en: `Singapore`, ja: `シンガポール` },
    SI: { en: `Slovenia`, ja: `スロベニア` },
    SK: { en: `Slovakia`, ja: `スロバキア` },
    TH: { en: `Thailand`, ja: `タイ` },
    TR: { en: `Turkey`, ja: `トルコ` },
    TW: { en: `Taiwan`, ja: `台湾` },
    US: { en: `United States of America`, ja: `アメリカ合衆国` },
    XK: { en: `Kosovo`, ja: `コソボ` },
  },
};
