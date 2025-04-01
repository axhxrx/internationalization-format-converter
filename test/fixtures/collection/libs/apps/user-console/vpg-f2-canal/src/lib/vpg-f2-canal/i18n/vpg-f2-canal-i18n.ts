export const vpgF2CanalI18n = {
  vpc: {
    title: {
      en: 'Transit Gateway VPC attachment connections',
      ja: 'Transit Gateway VPC アタッチメント接続',
    },
    subtitle: {
      en: 'Connect your VPG Transit Gateway to a VPC',
      ja: 'VPG Transit Gatewayを VPC に接続します',
    },
    table: {
      name: {
        en: 'Name',
        ja: '名前',
      },
      status: {
        en: 'Status',
        ja: 'ステータス',
      },
      attachmentId: {
        en: 'ID',
        ja: 'ID',
      },
      awsAccountId: {
        en: 'AWS Account ID',
        ja: 'AWS アカウント ID',
      },
    },
    acceptConnectionRequest: {
      en: 'Accept Connection Request',
      ja: '接続リクエストを承認する',
    },
    acceptSuccess: {
      en:
        'Connection request has been accepted and initiated. Please wait a few minutes for the connection to be established, then reload this page.',
      ja:
        '接続リクエストが承認され、開始されました。接続が確立されるまで数分お待ちください。その後、このページを再読み込みしてください。',
    },
    rejectSuccess: {
      en: 'Connection request rejected successfully',
      ja: '接続リクエストが正常に拒否されました',
    },
    rejectConnectionRequest: {
      en: 'Reject Connection Request',
      ja: '接続リクエストを拒否する',
    },
    canalNotYetActive: {
      en: 'Canal is not yet active',
      ja: 'Canalはまだアクティブではありません',
    },
    activateCanal: {
      en: 'Activate Canal',
      ja: 'Canalをアクティブにする',
    },
    deleteCanalConnection: {
      en: 'Delete Tgw Connection',
      ja: 'Tgw接続を削除する',
    },
    createCanalConnection: {
      en: 'Add Transit Gateway VPC attachment connection',
      ja: 'Transit Gateway VPC アタッチメント接続を追加',
    },
    configurationButton: {
      en: 'Configuration',
      ja: '設定',
    },
    configuration: {
      title: {
        en: 'VPC Attachment Configuration',
        ja: 'VPC アタッチメントの設定',
      },
      close: {
        en: 'Close',
        ja: '閉じる',
      },
      description: {
        en:
          'You will need to accept the resource share invitation from Quoracomm and create a Transit Gateway VPC attachment to your VPG to complete the connection setup.',
        ja:
          '接続設定を完了するには、Quoracomm からのリソース共有招待を受け入れ、VPG にTransit Gateway VPC アタッチメントを作成する必要があります。',
      },
      resourceShareAcceptanceTitle: {
        en: 'Accept Resource Share Invitation',
        ja: 'リソース共有招待を受け入れる',
      },
      descriptionCommandResourceShareAccept: {
        en:
          'Accept the resource share invitation from Quoracomm via the following commands. Please replace <code>&lt;REPLACE_YOUR_AWS_PROFILE&gt;</code> with your AWS profile.',
        ja:
          '以下のコマンドを使用して、Quoracomm からのリソース共有招待を受け入れます。<code>&lt;REPLACE_YOUR_AWS_PROFILE&gt;</code>をAWS Profileに置き換えてください。',
      },
      createVpcAttachmentTitle: {
        en: 'Create Transit Gateway VPC attachment',
        ja: 'Transit Gateway VPC アタッチメントを作成',
      },
      descriptionCommandCreateVpcAttachment: {
        en:
          'Create a Transit Gateway VPC attachment to your VPG via the following command. Please replace <code>&lt;REPLACE_YOUR_SUBNET_ID_A&gt;</code> and <code>&lt;REPLACE_YOUR_SUBNET_ID_B&gt;</code> with your subnet IDs. Please replace <code>&lt;REPLACE_YOUR_AWS_PROFILE&gt;</code> with your AWS profile.',
        ja:
          '以下のコマンドを使用して、VPG にTransit Gateway VPC アタッチメントを作成します。 <code>&lt;REPLACE_YOUR_SUBNET_ID_A&gt;</code> と <code>&lt;REPLACE_YOUR_SUBNET_ID_B&gt;</code> をサブネット ID に置き換えてください。<code>&lt;REPLACE_YOUR_AWS_PROFILE&gt;</code>をAWS Profileに置き換えてください。',
      },
      resourceShareAlreadyComplete: {
        en: 'Resource share invitation has already been accepted',
        ja: 'リソース共有招待はすでに受け入れられています',
      },
      vpcAttachmentAlreadyComplete: {
        en: 'VPC attachment is complete.',
        ja: 'VPC アタッチメントが完了しました。',
      },
    },
    create: {
      title: {
        en: 'Create a VPC attachment',
        ja: 'VPC アタッチメントを作成',
      },
      subtitle: {
        en: 'Connect your VPG Transit Gateway to your AWS VPC',
        ja: 'VPG Transit Gatewayを AWS VPC に接続します',
      },
      awsAccountIdLabel: {
        en: 'AWS Account ID',
        ja: 'AWS アカウント ID',
      },
      customerVpcIdLabel: {
        en: 'VPC ID',
        ja: 'VPC ID',
      },
      regionLabel: {
        en: 'AWS Region',
        ja: 'AWS リージョン',
      },
      nameLabel: {
        en: 'Name',
        ja: '名前',
      },
      nameDescription: {
        en:
          '(Optional) Create a name for the VPC attachment. Please note that after creation of the VPC attachment, the name cannot be changed.',
        ja: '(任意) VPC アタッチメントは作成後に変更できません。',
      },
      submit: {
        en: 'Add connection',
        ja: '接続を追加',
      },
      cancel: {
        en: 'Cancel',
        ja: 'キャンセル',
      },
      success: {
        en: 'VPC attachment created successfully',
        ja: 'VPC アタッチメントが正常に作成されました',
      },
    },
    delete: {
      title: {
        en: 'Remove Transit Gateway VPC attachment connection',
        ja: 'Transit Gateway VPC アタッチメント接続を削除',
      },
      subtitle: {
        en: 'Remove the connection between your VPG Transit Gateway and a VPC',
        ja: 'VPG Transit Gateway と VPC 間の接続を削除します',
      },
      submit: {
        en: 'Delete connection',
        ja: '接続を削除',
      },
      cancel: {
        en: 'Cancel',
        ja: 'キャンセル',
      },
      description: {
        en: 'Are you sure you want to delete the following VPC attachment connection?',
        ja: '次の VPC アタッチメント接続を削除してもよろしいですか？',
      },
      success: {
        en: 'VPC attachment connection deleted successfully',
        ja: 'VPC アタッチメント接続が正常に削除されました',
      },
    },
  },
  peering: {
    title: {
      en: 'Transit Gateway peering connections',
      ja: 'Transit Gateway ピアリング接続',
    },
    subtitle: {
      en: 'Create a peering connection between your VPG Transit Gateway to a remote Transit Gateway',
      ja: 'VPG Transit Gateway とリモート Transit Gateway 間にピアリング接続を作成します',
    },
    table: {
      name: {
        en: 'Name',
        ja: '名前',
      },
      id: {
        en: 'ID',
        ja: 'ID',
      },
      status: {
        en: 'Status',
        ja: 'ステータス',
      },
      peerTgwId: {
        en: 'Transit Gateway ID',
        ja: 'Transit Gateway ID',
      },
    },
    delete: {
      en: 'Delete connection',
      ja: '接続を削除',
    },
    deleteSuccess: {
      en: 'Peering connection deleted successfully',
      ja: 'ピアリング接続が正常に削除されました',
    },
    add: {
      en: 'Add Transit Gateway peering connection',
      ja: 'Transit Gateway ピアリング接続を追加',
    },
    addSuccess: {
      en: 'Peering connection added successfully',
      ja: 'ピアリング接続が正常に追加されました',
    },
    peeringAttachmentId: {
      en: 'Peering Attachment ID',
      ja: 'ピアリングアタッチメント ID',
    },
    configurationButton: {
      en: 'Configuration',
      ja: '設定',
    },
    configuration: {
      title: {
        en: 'Peering Attachment Configuration',
        ja: 'ピアリングアタッチメントの設定',
      },
      close: {
        en: 'Close',
        ja: '閉じる',
      },
      description: {
        en: 'You will need to accept the transit gateway peering attachment to complete the connection setup.',
        ja: '接続設定を完了するには、Transit Gateway ピアリングアタッチメントを受け入れる必要があります。',
      },
      acceptTgwPeeringAttachmentTitle: {
        en: 'Accept Transit Gateway Peering Attachment',
        ja: 'Transit Gateway ピアリングアタッチメントを受け入れる',
      },
      descriptionCommandAcceptPeeringAttachment: {
        en:
          'Accept the transit gateway peering attachment via the following commands. Please replace <code>&lt;REPLACE_YOUR_AWS_PROFILE&gt;</code> with your AWS profile.',
        ja:
          '以下のコマンドを使用して、Transit Gateway ピアリングアタッチメントを受け入れます。<code>&lt;REPLACE_YOUR_AWS_PROFILE&gt;</code>をAWS Profileに置き換えてください。',
      },
    },
    addModal: {
      title: {
        en: 'Add Transit Gateway peering connection',
        ja: 'Transit Gateway ピアリング接続を追加',
      },
      subtitle: {
        en:
          `Create a peering connection between your Quoracomm Virtual Private Gateway's (VPG) Transit Gateway to a remote Transit Gateway`,
        ja: 'VPG Transit Gateway とリモート Transit Gateway 間にピアリング接続を作成します',
      },
      awsAccountIdLabel: {
        en: 'AWS Account ID',
        ja: 'AWS アカウント ID',
      },
      customerTgwIdLabel: {
        en: 'Transit Gateway ID',
        ja: 'Transit Gateway ID',
      },
      regionLabel: {
        en: 'AWS Region',
        ja: 'AWS リージョン',
      },
      nameLabel: {
        en: 'Name',
        ja: '名前',
      },
      nameDescription: {
        en:
          '(Optional) Create a name for the peering connection. Please note that after creation of the peering connection, the name cannot be changed.',
        ja: '(任意) ピアリング接続は作成後に変更できません。',
      },
      submit: {
        en: 'Add connection',
        ja: '接続を追加',
      },
      cancel: {
        en: 'Cancel',
        ja: 'キャンセル',
      },
    },
    deleteModal: {
      title: {
        en: 'Remove Transit Gateway peering connection',
        ja: 'Transit Gateway ピアリング接続を削除',
      },
      subtitle: {
        en: 'Remove the peering connection between your VPG Transit Gateway and a remote Transit Gateway',
        ja: 'VPG Transit Gateway とリモート Transit Gateway 間のピアリング接続を削除します',
      },
      submit: {
        en: 'Delete connection',
        ja: '接続を削除',
      },
      cancel: {
        en: 'Cancel',
        ja: 'キャンセル',
      },
      description: {
        en: 'Are you sure you want to delete the following peering connection?',
        ja: '次のピアリング接続を削除してもよろしいですか？',
      },
    },
  },
};
