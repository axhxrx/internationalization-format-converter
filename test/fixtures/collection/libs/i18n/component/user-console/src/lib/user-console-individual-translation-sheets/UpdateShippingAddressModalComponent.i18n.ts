export const translations = {
    'UpdateShippingAddressModalComponent': {
        'confirm': { en: `Save`, ja: `保存` },
        'title_edit': { en: `Edit shipping address`, ja: `お届け先の編集` },
        'title_new': { en: `Add new shipping address`, ja: `新しいお届け先` },
        'country_code': { en: `Country`, ja: `国` },
        'shipping_address': {
            'generic': {
                'companyName_helpText': { en: `(please enter 'Individual' if individual purchase)`, ja: `企業名（個人の方は「個人」と記入してください）` }
            },
            'jp': {
                'addressLine1_placeholder': {
                    'en': "",
                    'ja': "（例）玉川"
                },
                'addressLine2_placeholder': {
                    'en': "",
                    'ja': "（例）4-5-6"
                },
                'building_placeholder': {
                    'en': "",
                    'ja': "（例）ABCビル 2F"
                },
                'city_placeholder': {
                    'en': "",
                    'ja': "（例）世田谷区"
                },
                'companyName_helpText': { en: `(please enter 'Individual' if individual purchase)`, ja: `企業名（個人の方は「個人」と記入してください）` },
                'state_placeholder': {
                    'en': "",
                    'ja': "（例）東京都"
                },
                'zipCode_helpText': { en: `By providing postal code here, State, City and Address (name of town) will be automatically filled in.`, ja: `郵便番号を入力すると、都道府県、市区町村、住所（町名まで）が自動的に入力されます。` }
            },
            'us': {
                'companyName_helpText': { en: `(please enter 'Individual' if individual purchase)`, ja: `企業名（個人の方は「個人」と記入してください）` }
            }
        },
        'form': {
            'errors': {
                '_default': {
                    'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                    'required': { en: `The field is required`, ja: `必須項目です。` },
                    'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                    'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                },
                'generic': {
                    'countryCode': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'zipCode': {
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` },
                        'pattern': { en: `Invalid character is used. Digits (0-9), Alphabets (A-Z), - and white spaces can be used`, ja: `全角文字を入力してください。` }
                    },
                    'state': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'city': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'addressLine1': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'addressLine2': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'building': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'companyName': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'department': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'fullName': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'phoneNumber': {
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` },
                        'pattern': { en: `Invalid format or characters inputted for the phone number.`, ja: `電話番号に無効な形式または文字が入力されました。` }
                    },
                    'email': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` },
                        'email': { en: `Email address is invalid`, ja: `メールアドレスを入力してください。` }
                    }
                },
                'jp': {
                    'countryCode': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'state': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'city': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'addressLine1': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'addressLine2': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'building': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'companyName': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'department': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'fullName': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'phoneNumber': {
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` },
                        'pattern': { en: `Invalid format or characters inputted for the phone number.`, ja: `電話番号に無効な形式または文字が入力されました。` }
                    },
                    'email': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` },
                        'email': { en: `Email address is invalid`, ja: `メールアドレスを入力してください。` }
                    },
                    'zipCode': {
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` },
                        'pattern': { en: `You can use digits only`, ja: `半角数字だけを使って入力してください。` }
                    },
                    'addressLineMaxlength': { en: `The length of the sum of Address Line 1 and Address Line 2 is too long.`, ja: `住所（町名まで）と住所（番地以降）は合計で全角16文字または半角32文字以下である必要があります。` }
                },
                'us': {
                    'countryCode': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'state': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'city': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'addressLine1': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'addressLine2': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'building': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'companyName': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'department': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'fullName': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` }
                    },
                    'phoneNumber': {
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` },
                        'pattern': { en: `Invalid format or characters inputted for the phone number.`, ja: `電話番号に無効な形式または文字が入力されました。` }
                    },
                    'email': {
                        'pattern': { en: `Invalid character is used`, ja: `全角文字を入力してください。` },
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` },
                        'email': { en: `Email address is invalid`, ja: `メールアドレスを入力してください。` }
                    },
                    'zipCode': {
                        'required': { en: `The field is required`, ja: `必須項目です。` },
                        'maxlength': { en: `The length of the input is too long ({{actualLength}}/{{requiredLength}}).`, ja: `入力が長すぎます。({{actualLength}}/{{requiredLength}})` },
                        'unicodeMaxlength': { en: `The length of the input is too long ({{actualLength}}/({maxLengthHalfWidth}}).`, ja: `全角換算{{requiredLength}}文字または半角換算{{requiredLengthHalfWidth}}文字以下である必要があります。現在値: {{actualLength}}` },
                        'pattern': { en: `Zip code is invalid`, ja: `Zip コードのフォーマットが不正です。` }
                    }
                }
            }
        }
    }
};
