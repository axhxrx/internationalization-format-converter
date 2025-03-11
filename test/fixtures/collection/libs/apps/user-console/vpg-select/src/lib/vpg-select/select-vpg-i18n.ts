import { I18nItem } from '@i18n/core';
import { DEFAULT_LOCALES } from '@i18n/quoracomm-locales';

const iconConfirm = {
  en: '<i class="ds-icon --icon-confirm"></i>',
  ja: '<i class="ds-icon --icon-confirm"></i>',
};
const iconConfirmWithSubnote = (subnoteText: I18nItem<DEFAULT_LOCALES>) => ({
  en: '<i class="ds-icon --icon-confirm"></i>' + `${richTip(subnoteText.en)}`,
  ja: '<i class="ds-icon --icon-confirm"></i>' + `${richTip(subnoteText.ja)}`,
});

const richTip = (tip: string) =>
  `<div class="ds-richtip">
  <i class="ds-icon --icon-info ds-richtip__button"></i>
  <div class="ds-richtip__content">${tip}</div>
</div>`;
const iconDeny = { en: '-', ja: '-' };
const aTag = (href: string, text: string) => `<a href="${href}" target="_blank" class="--link">${text}</a>`;
const linkWithSubtitle = (href: string, text: string, subtitle: string) =>
  `<div><a href="${href}" target="_blank">${text}</a></div><div class="ds-text --xsmall">${subtitle}</div>`;

const typeFSubnote = {
  en: 'Network configuration setup such as VXLAN is required.',
  ja: 'お客様のシステムにVXLAN終端装置などの環境設定が必要となります。',
};
const typeF2Subnote = {
  en: 'Other than private connection setup, no other settings are required.',
  ja: 'プライベート接続以外の特別な設定は不要です。',
};

export const selectVpgI18n = {
  selectionDetails: {
    selectVpg: {
      columnTitle: {
        en: 'Select VPG Type',
        ja: 'VPGタイプを選択してください',
      },
      columnValue: {
        typeE: {
          en: 'Type-E',
          ja: 'Type-E',
        },
        typeF: {
          en: 'Type-F',
          ja: 'Type-F',
        },
        typeF2: {
          en: 'Type-F2',
          ja: 'Type-F2',
        },
      },
    },
    subscriberCapacity: {
      columnTitle: {
        en: 'Maximum concurrent session limit',
        ja: '最大同時接続セッション数',
      },
      columnValue: {
        typeE: {
          en: '1,000 sessions',
          ja: '1,000 セッション',
        },
        typeF: {
          en: '100,000 sessions',
          ja: '100,000 セッション',
        },
        typeF2: {
          en: '100,000 sessions',
          ja: '100,000 セッション',
        },
      },
    },
    quoracommAirForCellular: {
      columnTitle: {
        en: aTag(
          'https://developers.example.com/en/docs/air/',
          'Quoracomm Air for Cellular',
        ),
        ja: aTag(
          'https://quoracomm.jp/services/air/cellular/',
          'QUORACOMM Air for セルラー',
        ),
      },
      columnValue: {
        typeE: iconConfirm,
        typeF: iconConfirm,
        typeF2: iconConfirm,
      },
    },
    quoracommArc: {
      columnTitle: {
        en: aTag('https://developers.example.com/en/docs/arc/', 'Quoracomm Arc'),
        ja: aTag('https://quoracomm.jp/services/arc/', 'QUORACOMM Arc'),
      },
      columnValue: {
        typeE: iconConfirm,
        typeF: iconConfirm,
        typeF2: iconConfirm,
      },
    },
    quoracommGateDeviceToDevice: {
      columnTitle: {
        en: aTag(
          'https://developers.example.com/en/docs/gate#device-to-device-access',
          'Device to device communication within VPG',
        ),
        ja: aTag('https://quoracomm.jp/services/gate/', 'VPG内のデバイス間通信'),
      },
      columnValue: {
        typeE: iconConfirm,
        typeF: iconConfirm,
        typeF2: iconConfirm,
      },
    },
    privateAwsConnection: {
      columnTitle: {
        en: aTag(
          'https://developers.example.com/en/docs/canal/',
          'Private connection with AWS',
        ),
        ja: aTag(
          'https://quoracomm.jp/services/canal/',
          'AWSとのプライベート接続',
        ),
      },
      columnValue: {
        typeE: iconDeny,
        typeF: iconConfirm,
        typeF2: iconConfirm,
      },
    },
    quoracommDoorVpnConnection: {
      columnTitle: {
        en: aTag(
          'https://developers.example.com/en/docs/door/',
          'Private connection via VPN',
        ),
        ja: aTag(
          'https://quoracomm.jp/services/door/',
          'VPNによるプライベート接続',
        ),
      },
      columnValue: {
        typeE: iconDeny,
        typeF: iconConfirm,
        typeF2: iconConfirm,
      },
    },
    privateConnectionViaDedicatedLines: {
      columnTitle: {
        en: aTag(
          'https://www.example.com/products/direct/',
          'Private connection via dedicated lines',
        ),
        ja: aTag(
          'https://quoracomm.jp/services/direct/',
          '専用線によるプライベート接続',
        ),
      },
      columnValue: {
        typeE: iconDeny,
        typeF: iconConfirm,
        typeF2: iconConfirm,
      },
    },
    directIpConnectionInPrivateConncetedNetworks: {
      columnTitle: {
        en: 'Direct IP connection in private connected networks',
        ja: 'プライベート接続されたNW内のIP通信',
      },
      columnValue: {
        typeE: iconDeny,
        typeF: iconConfirmWithSubnote(typeFSubnote),
        typeF2: iconConfirmWithSubnote(typeF2Subnote),
      },
    },
    quoracommFixedGlobalIpAddress: {
      columnTitle: {
        en: aTag(
          'https://developers.example.com/en/docs/vpg/fixed-global-ip/',
          'Global IP address for VPG',
        ),
        ja: aTag(
          'https://users.example.com/ja-jp/docs/vpg/configure-fixed-global-ips/',
          'VPGへの固定グローバルIPアドレス付与',
        ),
      },
      columnValue: {
        typeE: iconConfirm,
        typeF: iconConfirm,
        typeF2: iconConfirm,
      },
    },
    quoracommSimBasedRouting: {
      columnTitle: {
        en: aTag(
          'https://developers.example.com/en/docs/vpg/sim-based-routing/',
          'SIM based routing',
        ),
        ja: aTag(
          'https://users.example.com/ja-jp/docs/vpg/sim-based-routing/',
          'SIMベースルーティング',
        ),
      },
      columnValue: {
        typeE: iconDeny,
        typeF: iconConfirm,
        typeF2: iconDeny,
      },
    },
    advancedRoutingSettings: {
      columnTitle: {
        en: 'Advanced routing settings',
        ja: '高度なルーティング設定',
      },
      columnValue: {
        typeE: iconDeny,
        typeF: iconDeny,
        typeF2: iconConfirm,
      },
    },
  },
};
