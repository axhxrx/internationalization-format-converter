export const vpgRoutingTableI18n = {
  title: {
    en: 'VPG Routing Table',
    ja: 'VPG ルーティングテーブル',
  },
  subtitle: {
    en: `Manage static routes between your VPG Transit Gateways and remote networks`,
    ja: `VPG Transit Gatewayとリモートネットワーク間のスタティックルートを管理します`,
  },
  routeType: {
    en: 'Route Type',
    ja: 'ルートタイプ',
  },
  destinationNetwork: {
    en: 'Destination Network',
    ja: '宛先ネットワーク',
  },
  destinationNetworkDescription: {
    en: 'Destination network in CIDR notation',
    ja: 'CIDR表記の宛先ネットワーク',
  },
  destinationNetworkDefaultRouteConfirmation: {
    en: 'Setting your destination network to a value of 0.0.0.0/0 allows SIM communications from all sources within the private network. Please click on this checkbox to confirm that this setting is intentional.',
    ja: 'プライベートネットワーク内で全ての送信元からのSIM通信への通信が許可されます。この設定が意図したものであることを確認してください。',
  },
  catchAllRouteNotAllowedWarning: {
    en: 'Setting your destination network to a value of 0.0.0.0/0 is not allowed because the VPG is using the Internet Gateway.',
    ja: 'VPGがインターネットゲートウェイを使用しているため、宛先ネットワークを「0.0.0.0/0」にすることはできません。',
  },
  destinationNetworkUeSubnetOverlapConfirmation: {
    en: 'Your inputted target network overlaps with the VPG UE subnet. Please click on this checkbox to confirm that this setting is intentional.',
    ja: '入力されたターゲットネットワークがVPG UEサブネットと重複しています。この設定が意図したものであることを確認してください。',
  },
  destinationNetworkMatchesUeSubnetWarning: {
    en: 'The inputted target CIDR range is the same as the UeSubnet. This is not allowed.',
    ja: '入力されたターゲットCIDR範囲はUE Subnetと同じです。これは許可されません。',
  },
  gateway: {
    en: 'Gateway',
    ja: 'ゲートウェイ',
  },
  gatewayDescription: {
    en: 'AWS Transit Gateway ID',
    ja: 'AWSのTransit Gateway ID',
  },
  addStaticRoute: {
    en: 'Add Static Route',
    ja: 'スタティックルートを追加',
  },
  edit: {
    title: {
      en: 'Edit Static Route',
      ja: 'スタティックルートを編集',
    },
    subtitle: {
      en: 'Set destination network and gateway for the vpg static route. ',
      ja: 'VPGのスタティックルートのゲートウェイを変更します。',
    },
    save: {
      en: 'Update',
      ja: '更新',
    },
    success: {
      en: 'Static route updated successfully',
      ja: 'スタティックルートが正常に更新されました',
    },
    cancel: {
      en: 'Cancel',
      ja: 'キャンセル',
    },
  },
  add: {
    title: {
      en: 'Add Static Route',
      ja: 'スタティックルートの追加',
    },
    subtitle: {
      en: 'Set destination network and gateway for a new vpg static route. ',
      ja: '新しいVPGのスタティックルートの宛先ネットワークとゲートウェイを設定します。',
    },
    save: {
      en: 'Add',
      ja: '追加',
    },
    success: {
      en: 'Static route added successfully',
      ja: 'スタティックルートが正常に追加されました',
    },
    cancel: {
      en: 'Cancel',
      ja: 'キャンセル',
    },
  },
  delete: {
    title: {
      en: 'Delete Static Route',
      ja: 'スタティックルートの削除',
    },
    success: {
      en: 'Static route deleted successfully',
      ja: 'スタティックルートが正常に削除されました',
    },
    confirmationMessage: {
      en: 'Are you sure you want to delete the static route?',
      ja: 'このスタティックルートを削除してもよろしいですか？',
    },
    submit: {
      en: 'Delete',
      ja: '削除',
    },
    cancel: {
      en: 'Cancel',
      ja: 'キャンセル',
    },
  },
};
