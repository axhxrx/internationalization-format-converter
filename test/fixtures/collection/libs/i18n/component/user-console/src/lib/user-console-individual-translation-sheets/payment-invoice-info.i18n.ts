export const translations = {
    'paymentInvoiceInfo': {
        'contactInformation': { en: `Contact information for invoices`, ja: `請求書の連絡先` },
        'description': { en: `Please enter the contact information to be displayed on payment invoices.`, ja: `支払請求書に表示される連絡先情報を入力してください。` },
        'companyId': { en: `Company ID`, ja: `購入企業ID` },
        'customerName': { en: `Customer Name`, ja: `お名前` },
        'department': { en: `Department`, ja: `部門名` },
        'companyName': { en: `Company Name`, ja: `会社名` },
        'postalCode': { en: `Postal Code`, ja: `郵便番号` },
        'address': { en: `Address`, ja: `住所` },
        'email': { en: `Email`, ja: `Email` },
        'ccEmail1': { en: `Email (CC) 1`, ja: `Email (CC) 1` },
        'ccEmail2': { en: `Email (CC) 2`, ja: `Email (CC) 2` },
        'ccEmail3': { en: `Email (CC) 3`, ja: `Email (CC) 3` },
        'ccEmail4': { en: `Email (CC) 4`, ja: `Email (CC) 4` },
        'phoneNumber': { en: `Phone`, ja: `電話番号` },
        'billingMethod': { en: `Billing Method`, ja: `請求書の送付方法` },
        'update': { en: `Update`, ja: `更新` },
        'errors': {
            'name': {
                'required': { en: `Customer name is required`, ja: `お名前は必須です。` },
                'maxLength': { en: `Customer name should not have more than {{ maxLength }} characters`, ja: `お名前は {{ maxLength }} 文字以内にしてください。` }
            },
            'companyDepartment': {
                'required': { en: `Company department is required`, ja: `部門名は必須です。` },
                'maxLength': { en: `Company department should not have more than {{ maxLength }} characters.`, ja: `部門名は {{ maxLength }} 文字以内にしてください。` }
            },
            'postalCode': {
                'required': { en: `Postal code is required`, ja: `郵便番号は必須です。` },
                'maxLength': { en: `Postal code should not have more than {{ maxLength }} digits`, ja: `郵便番号は {{ maxLength }} 文字以内にしてください` },
                'numberOnly': { en: `Only numbers are allowed in postal code`, ja: `郵便番号は数字のみ指定してください` }
            },
            'address': {
                'required': { en: `Address is required`, ja: `住所は必須です。` },
                'maxLength': { en: `Address should not have more than {{ maxLength }} characters`, ja: `住所は {{ maxLength }} 文字以内にしてください。` }
            },
            'email': {
                'required': { en: `Email is required`, ja: `Emailは必須です。` },
                'maxLength': { en: `Email should not have more than {{ maxLength }} characters`, ja: `Emailは {{ maxLength }} 文字以内にしてください。` },
                'email': { en: `Entered email is not valid`, ja: `入力されたEmailは正しい形式ではありません。` },
                'forbiddenEmailDomain': { en: `Please confirm email domains. gmail, icloud, yahoo domains cannot be used`, ja: `貴法人のドメインのメールアドレスをご指定ください。Gmail などのアドレスはお使いいただけません。` }
            },
            'phoneNumber': {
                'required': { en: `Phone number is required`, ja: `電話番号は必須です。` },
                'maxLength': { en: `Phone number should not have more than {{ maxLength }} digits`, ja: `電話番号は {{ maxLength }} 文字以内にしてください。` },
                'numberOnly': { en: `Only numbers are allowed in phone number`, ja: `電話番号は数字のみ指定してください。` }
            }
        },
        'billingMethods': {
            'post': { en: `Postal`, ja: `郵送` },
            'mail': { en: `Email`, ja: `Eメール` }
        },
        'getPaymentInvoiceInfo': {
            'error': { en: `Unexpected error happened while retrieving payment info`, ja: `請求書払いの情報を取得中に予期せぬエラーが発生しました` }
        },
        'updateInvoiceInfo': {
            'success': { en: `Invoice info was updated successfully`, ja: `請求書払いの情報の更新に成功しました` },
            'error': { en: `Unexpected error happened while updating invoice info`, ja: `請求書払いの情報の更新中に予期せぬエラーが発生しました` }
        },
        'directDebit': {
            'applyButton': { en: `Switch to direct debit`, ja: `口座振替に切り替える` },
            'confirmTitle': { en: `Confirm Switch to direct debit`, ja: `口座振替に切り替え確認` },
            'apply': { en: `Switch`, ja: `口座振替に切り替え` },
            'info1': { en: `Once you apply for the direct debit, NetProtections will send an application form by email and this request cannot be canceled.`, ja: `口座振替の申請を行うと、ネットプロテクションズ社から口座振替依頼書が郵送されます。申請後に、郵送をキャンセルすることはできません。` },
            'info2': { en: `When you receive the application form, fill it out and return it to NetProtections.`, ja: `口座振替依頼書を受け取ったら、必要事項を記入してネットプロテクションズ社に返送してください。` },
            'info3': { en: `It will take at least two months to switch to direct debit after NetProtections receives the application form. Until the process completes, you will continue to pay by invoice.`, ja: `ネットプロテクションズ社が口座振替依頼書を受け取ってから口座振替に切り替わるまで、最低２か月は掛かります。変更が完了するまでは、引き続き請求書払いでのお支払いとなります。` },
            'directDebitStatusLabel': { en: `Direct debit`, ja: `口座振替` },
            'directDebitStatus': {
                '0': { en: `Not applied`, ja: `未申込` },
                '10': { en: `Preparing for issuing application form`, ja: `依頼書発行待ち` },
                '20': { en: `Waiting for receiving application form`, ja: `依頼書返送待ち` },
                '30': { en: `Reviewing application form`, ja: `ネットプロテクションズ確認中` },
                '35': { en: `Requesting to financial institution`, ja: `金融機関への発送待ち` },
                '40': { en: `Reviewing by financial institution`, ja: `金融機関審査中` },
                '50': { en: `Applied`, ja: `口座振替適用中` },
                '70': { en: `Rejected by NetProtections`, ja: `口座振替NG（ネットプロテクションズ）` },
                '71': { en: `Rejected by financial institution`, ja: `口座振替NG（金融機関）` },
                '90': { en: `Terminated`, ja: `口座振替廃止` }
            }
        },
        'switchToDirectDebit': {
            'description': { en: `Prefer to <strong>pay by direct debit</strong>? `, ja: `<strong>口座振替</strong>の支払いに変更しますか？` },
            'linkText': { en: `Apply online`, ja: `オンラインで申請` }
        }
    }
};
