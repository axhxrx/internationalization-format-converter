export const translations = {
  permissions_editor: {
    choose_template: { en: `Choose template...`, ja: `テンプレートを選択してください` },
    common_api_error: { en: `There was some error from API while fetching templates`,
      ja: `テンプレートの取得時に API エラーが発生しました。` },
    copied: { en: `Copied to clipboard`, ja: `クリップボードにコピーしました` },
    copy: { en: `Copy`, ja: `コピー` },
    description: { en: `Template details`, ja: `テンプレートの詳細` },
    select_templates: { en: `Templates`, ja: `テンプレート選択` },
    syntax: {
      en:
        `Syntax definition is <a target='_blank' href='https://developers.example.com/en/docs/security/users-and-roles/'>available on the developers site</a>`,
      ja:
        `権限設定の構文は <a target='_blank' href='https://users.example.com/ja-jp/docs/sam/permission/'>ドキュメントをご参照ください</a>`,
    },
    templates: {
      sample10: {
        description: {
          en: '',
          ja: '',
        },
        label: { en: `Allow full read/write access only from a specific IP address range`,
          ja: `特定の IP アドレスからのアクセスを許可` },
      },
      sample11: {
        description: {
          en: '',
          ja: '',
        },
        label: { en: `Allow read-only access to billing and payment functions, deny access to all other functions`,
          ja: `課金情報の参照のみ許可` },
      },
      sample2: {
        description: {
          en: '',
          ja: '',
        },
        label: { en: `Allow read-only access to all SIMs and SIM monitoring functions`,
          ja: `SIM 管理画面、イベントハンドラーの参照のみ許可` },
      },
      sample3: {
        description: {
          en: '',
          ja: '',
        },
        label: { en: `Allow read-only access to all data stored in Harquest Data`,
          ja: `Harquest Data に保存されたデータの参照のみ許可` },
      },
      sample4: {
        description: {
          en: '',
          ja: '',
        },
        label: { en: `Deny access to support ticket functions, allow read/write access to all other functions`,
          ja: `サポート問い合わせのみ不可・他の API は全て許可` },
      },
      sample5: {
        description: {
          en: '',
          ja: '',
        },
        label: { en: `Allow full read/write access to all functions`, ja: `全ての API を許可` },
      },
      sample6: {
        description: {
          en: '',
          ja: '',
        },
        label: { en: `Allow a SAM user to change their own password`,
          ja: `SAM ユーザーが自分自身のパスワードのみを変更することを許可` },
      },
      sample7: {
        description: {
          en:
            `Allows startup, status change to dormant, and session disconnection for a specific SIM ID, as well as viewing the SIM management screen and searching for SIMs.`,
          ja:
            `特定の SIM ID に対する使用開始、休止へのステータス変更とセッション切断を許可、また SIM 管理画面の参照、SIM の検索を許可`,
        },
        label: { en: `Allow full read/write access to all functions for a specific SIM`,
          ja: `特定の SIM ID に対する操作のみを許可` },
      },
      sample8: {
        description: {
          en: '',
          ja: '',
        },
        label: { en: `Allow a SAM user to manage their own Multi Factor Authentication settings`,
          ja: `SAM ユーザーが自分自身の多要素認証の設定を行うことを許可` },
      },
      sample9: {
        description: {
          en: `Available in SAM User's role, and assumed role in a Harquest Files section in a group config.`,
          ja: `SAM ユーザー、Harquest Files のグループ設定の両方に利用できます`,
        },
        label: { en: `Allow read-only access to all files stored in Harquest Files within a specific directory`,
          ja: `Harquest Files の特定のパス以下に保存されたファイルの参照のみ許可` },
      },
    },
    types: {
      role: { en: `Copy from existing roles`, ja: `作成済みロール` },
      template: { en: `Sample templates`, ja: `サンプル` },
    },
  },
};
