export const translations = {
  virtual_private_gateways: {
    about: {
      createButton: { en: `Create VPG`, ja: `VPG を作成` },
      vpgDescription: {
        en:
          `When Quoracomm Air for Cellular device connect to the Quoracomm platform, core networking services are provided by platform gateway. As the default gateway is shared among all Quoracomm users, certain gateway functionality, such as private networking and device-to-device access, is disabled to ensure device and network security. <br/><br/> Quoracomm provides a Virtual Private Gateway (VPG) option which allows you to create and manage your own dedicated gateway on the Quoracomm platform. With a VPG, Air subscribers in your account connect to the Quoracomm platform using an isolated network environment, separate from other Quoracomm gateways.`,
        ja:
          `Virtual Private Gateway (VPG) とは、QUORACOMM の各種サービスを利用する上で重要な役割を担う機能コンポーネントです。 QUORACOMM Air for セルラーは QUORACOMM IoT SIM を提供し、モバイルネットワークを活用し、お客様の端末をクラウドに接続するサービスで、デフォルトでは各デバイスはインターネットへの接続を提供するゲートウェイに接続され、インターネット経由で任意の宛先への通信が提供されます。これに対し、VPG はお客様からのリクエストに応じて個別に用意されるお客様専用のゲートウェイです。各 SIM がどの VPG を利用するかは SIM グループで設定できます。<a href="https://users.example.com/ja-jp/docs/vpg/" target="_blank">さらに詳しく</a>`,
      },
      whatIsVpg: { en: `What is VPG?`, ja: `Virtual Private Gateway (VPG) とは` },
    },
    add: { en: `Create VPG`, ja: `VPG を追加` },
    assign_dynamic_source_ip: { en: `Change to a dynamic IP Address`, ja: `IP アドレスを開放` },
    assign_fixed_source_ip: { en: `Assign a fixed global IP address`, ja: `IP アドレスを割当` },
    closed_network: {
      direct: {
        description: {
          en:
            `To use this feature, please check the <a href="https://developers.example.com/en/docs/direct/" target="_blank">guide</a>.`,
          ja:
            `利用するには<a href="https://quoracomm.jp/services/direct/start_of_use/" target="_blank">QUORACOMM Direct ご利用開始までの流れ</a>をご確認ください。`,
        },
        description_termination: { en: `If you want to modify/delete config, please contact our support.`,
          ja: `設定内容の変更や削除をご希望の場合は、サポートまでお問い合わせください。` },
        title: { en: `Direct Connection`, ja: `専用線接続` },
      },
      door: {
        description: {
          en:
            `To use this feature, please check the <a href="https://developers.example.com/en/docs/door/" target="_blank">guide</a>.`,
          ja:
            `利用するには<a href="https://quoracomm.jp/services/door/start_of_use/" target="_blank">QUORACOMM Door ご利用開始までの流れ</a>をご確認ください。`,
        },
        description_termination: { en: `If you want to modify/delete config, please contact our support.`,
          ja: `設定内容の変更や削除をご希望の場合は、サポートまでお問い合わせください。` },
        title: { en: `VPN Connection`, ja: `VPN 接続` },
        use_dynamic_routing: {
          label: { en: `Routing Type`, ja: `ルーティングの種類` },
          values: {
            dynamic: { en: `Dynamic`, ja: `動的 (Dynamic)` },
            static: { en: `Static`, ja: `固定 (Static)` },
          },
        },
      },
      transit_gateway: {
        description: {
          en:
            `To use this feature, please check the <a href="https://developers.example.com/en/docs/canal/" target="_blank">guide</a>.`,
          ja:
            `利用するには<a href="https://quoracomm.jp/services/canal/tgw_start_of_use/" target="_blank">QUORACOMM Canal / AWS Transit Gateway 接続ご利用開始までの流れ</a>をご確認ください。`,
        },
        description_termination: { en: `If you want to modify/delete config, please contact our support.`,
          ja: `設定内容の変更や削除をご希望の場合は、サポートまでお問い合わせください。` },
        title: { en: `AWS Transit Gateway Connection`, ja: `AWS Transit Gateway 接続` },
        subTitle: {
          en: 'Connect your Quoracomm Virtual Private Gateways (VPG) to a AWS Transit Gateway',
          ja: 'VPG を AWS Transit Gateway に接続',
        },
      },
    },
    device_subnet_ip_range: { en: `Device Subnet IP Range`, ja: `デバイスサブネット IP アドレスレンジ` },
    dynamic_outbound_source_ip: { en: `Dynamic`, ja: `動的` },
    gate: {
      activation: {
        description: {
          en:
            `Quoracomm Gate enables to communication between Quoracomm Air SIMs in the same VPG. If you want to access devices with Quoracomm Air SIMs from your network, you needs to take some steps. (<a href='https://developers.example.com/en/docs/gate/'>more info</a>)`,
          ja:
            `Gate を有効にすると同一 VPG 内にある QUORACOMM Air SIM 間で通信ができるようになります。QUORACOMM Air SIM にリモートアクセスしたい場合は、Gate を有効にするだけでなく、Gate Peer を追加するなどのセットアップが必要です。詳しくは<a href='https://users.example.com/ja-jp/docs/gate/'>こちら</a>をご確認ください`,
        },
        description_without_gate_peer: {
          en: `Quoracomm Gate enables to communication between Quoracomm Air SIMs in the same VPG.`,
          ja: `Gate を有効にすると同一 VPG 内にある QUORACOMM Air SIM 間で通信ができるようになります。`,
        },
        submit: { en: `Save`, ja: `保存` },
        title: { en: `Quoracomm Gate`, ja: `Gate を有効にする` },
      },
      closed: { en: `Gate is disabled.`, ja: `Gate を無効にしました` },
      opened: { en: `Gate is enabled.`, ja: `Gate を有効にしました` },
      peer: {
        add: { en: `Add Gate Peer`, ja: `Gate Peer を追加` },
        delete: { en: `Delete`, ja: `削除` },
        inner_ip_address: { en: `Device Subnet IP address`, ja: `デバイスサブネット内 IP アドレス` },
        outer_ip_address: { en: `Tunnel Endpoint IP address`, ja: `トンネル接続用 IP アドレス` },
        owned_by_customer: {
          title: { en: `Gate Peers in your network`, ja: `お客様の Gate Peer 一覧` },
        },
        owned_by_quoracomm: {
          description: { en: `These Gate Peers are managed automatically by VPG.`,
            ja: `ここに表示されている Gate Peer は VPG が自動で管理しています。` },
          title: { en: `Gate Peers in VPG`, ja: `VPG の Gate Peer 一覧` },
        },
      },
      privacy_separator_enabled: { en: `Enable privacy separator`, ja: `プライバシーセパレーター` },
      privacy_separator_tooltip: { en: `Restrict access between devices even when Gate is enabled`,
        ja: `Gate 有効時にデバイス間の通信を抑制する` },
      title: { en: `Gate Setting`, ja: `Gate 設定` },
      type_f2_notice: { en: `Quoracomm Gate cannot be disabled for a type-F2 VPG.`,
        ja: `Type-F2 の VPG は、Gate 無効化にできません。` },
      vxlanid: { en: `VXLAN Network Identifier (1-16777215)`, ja: `VXLAN Network Identifier (1-16777215)` },
      vxlanSetupGuide: {
        arg1Description: { en: `Network interface name of gate peer`, ja: `Gate Peer のネットワークインタフェース名` },
        arg5Description: { en: `Subnet mask for the device subnet IP address range`,
          ja: `デバイスサブネット IP アドレスレンジのサブネットマスク` },
        description1: {
          en:
            `After registering Gate peer information in AWS management console, next submit VXLAN settings to Gate peer. SSH into gate peer and follow steps given below to run configuration script.`,
          ja:
            `AWS マネジメントコンソールでGate Peer の設定をしてGate Peer に VXLAN の設定を投入します。Gate Peer に SSH 接続し、以下の手順で設定用のスクリプトを実行します。`,
        },
        description2: {
          en:
            `First download the script (<code>gate_init_vxlan.sh</code>) for configuring VXLAN and give it execute permission.`,
          ja:
            `まず、VXLAN の設定を行うためのスクリプト <code>(gate_init_vxlan.sh)</code> をダウンロードし、実行権限を付けます。`,
        },
        description3: { en: `Then run the script (<code>gate_init_vxlan.sh</code>) with root permissions:`,
          ja: `続いて、設定スクリプト <code>gate_init_vxlan.sh</code> に引数を付けて root 権限で実行します:` },
        noVpgGatePeer: { en: `There is no VPG gate peer.`, ja: `There is no VPG gate peer.` },
        title: { en: `Configure VXLAN settings`, ja: `VXLAN の設定を投入する` },
        tooltipTitle: { en: `Click to see how to configure VXLAN settings`, ja: `VXLAN の設定を投入する案内` },
      },
    },
    groups: {
      attach: { en: `Attach a group`, ja: `グループを追加` },
      detach: { en: `Detach`, ja: `解除` },
      disabled: { en: `Disabled`, ja: `無効` },
      enabled: { en: `Enabled`, ja: `有効` },
      id: { en: `ID`, ja: `ID` },
      name: { en: `Name`, ja: `名前` },
      status: { en: `Status`, ja: `状態` },
      title: { en: `Groups`, ja: `この VPG を利用しているグループ` },
    },
    id: { en: `ID`, ja: `ID` },
    ip_address_map: {
      add: { en: `Add IP address`, ja: `エントリを追加` },
      delete: { en: `Delete`, ja: `削除` },
      description: { en: `Associate a static IP address to a SIM.`,
        ja: `VPG 内の SIM の IP アドレスを固定することができます。` },
      entry: {
        host_id: { en: `IMSI`, ja: `IMSI` },
        ip_address: { en: `IP address`, ja: `IP アドレス` },
        type: { en: `Host type`, ja: `タイプ` },
        type_values: {
          customerGatePeer: { en: `Customer Gate Peer`, ja: `お客様の Gate Peer` },
          gatePeer: { en: `Gate Peer`, ja: `VPG の Gate Peer` },
          static: { en: `Static`, ja: `固定IP` },
        },
      },
      title: { en: `IP address map`, ja: `IP アドレスマップ` },
    },
    loading: { en: `Loading ...`, ja: `読み込み中 ...` },
    menu_title: {
      pleaseSelect: { en: `Please select VPG Type`, ja: `選択してください` },
      typeC: { en: `Type-C (deprecated)`, ja: `Type-C` },
      typeE: { en: `Type-E (for Internet connectivity only)`, ja: `Type-E (インターネット接続専用)` },
      typeF: { en: `Type-F (private networking available)`, ja: `Type-F (閉域網接続可能)` },
      typeX: { en: `Type-X (for LMNOP WVS users only)`, ja: `Type-X (LMNOP WVS 接続専用)` },
    },
    modals: {
      add_gate_peer: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        created: { en: `Gate Peer is created`, ja: `Gate Peer を追加しました` },
        header: { en: `Add Gate Peer`, ja: `Gate Peer を追加` },
        inner_ip_address: { en: `Device Subnet IP address`, ja: `デバイスサブネット内 IP アドレス` },
        outer_ip_address: { en: `Tunnel Endpoint IP address`, ja: `トンネル接続用 IP アドレス` },
        submit: { en: `Create`, ja: `作成` },
      },
      add_vpc_pc: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        destination_cidr_block: { en: `VPC CIDR Block`, ja: `Quollabozo VPC のアドレスレンジ` },
        destination_cidr_block_caption: { en: `<div>The network address range which will be allowed to connect.
The size of address space must be smaller than <code>/16</code> and the address range has to be within
<code>10.0.0.0/8</code>, <code>172.16.0.0/12</code> or <code>192.168.0.0/16</code>.</div>
`, ja: `<div>SIM から通信を許可したいネットワークのアドレスレンジ。
<code>/16</code> よりもアドレス空間のサイズが小さく、なおかつ以下のアドレスレンジ内である必要があります:
<code>10.0.0.0/8</code>、<code>172.16.0.0/12</code> もしくは <code>192.168.0.0/16</code></div>
` },
        destination_cidr_block_placeholder: { en: `10.0.0.0/16`, ja: `10.0.0.0/16` },
        header: { en: `Add Quollabozo VPC Peering Connection`, ja: `Quollabozo VPC ピアリング接続を作成` },
        payment_ack: {
          en:
            `Quollabozo VPC Peering Connections will incur additional cost. The first peering connection is included in the corresponding VPG's active fee. Please check <a href='https://developers.example.com/en/docs/reference/fees/' class='alert-link' target='_blank'>pricing</a> page before creating it.`,
          ja:
            `Peering 機能を利用して「Quollabozo VPC ピアリング接続」を作成すると、Peering 機能の利用料金が発生します。利用料金については、<a href='https://quoracomm.jp/services/vpg/price/' class='alert-link' target='_blank'>Virtual Private Gateway のご利用料金</a>を参照してください。`,
        },
        peer_owner_id: { en: `AWS Account ID`, ja: `AWS アカウント ID` },
        peer_owner_id_placeholder: { en: `123456789012`, ja: `123456789012` },
        peer_region: { en: `AWS Region`, ja: `AWS リージョン` },
        peer_vpc_id: { en: `AWS VPC ID`, ja: `AWS VPC ID` },
        peer_vpc_id_placeholder: { en: `vpc-11112222`, ja: `vpc-11112222` },
        submit: { en: `Save`, ja: `作成` },
      },
      add_vpg: {
        asn: { en: `ASN`, ja: `ASN` },
        asn_description: {
          en: `You can set an ASN value for the transit gateway of VPG Type-F2. The default value is "64512".`,
          ja:
            `VPG Type-F2 の Transit Gateway に設定されるカスタム ASN を指定できます。デフォルトは「64512」になります。`,
        },
        asn_warning: { en: `You cannot change the ASN value after the VPG is created.`,
          ja: `VPG Type-F2 の ASN は作成後に変更できません。` },
        cancel: { en: `Cancel`, ja: `キャンセル` },
        device_subnet_ip_range: { en: `CIDR Range for device subnet`, ja: `デバイスサブネット IP アドレスレンジ` },
        deviceSubnetCidrRangeHelpText1: {
          en:
            `You can specify any private IP address range that DOES NOT conflict with <code>100.64.0.0/10</code> and <code>198.18.0.0/15</code>.`,
          ja:
            `<code>100.64.0.0/10</code>, <code>198.18.0.0/15</code> と重複しないプライベート IP アドレスレンジを指定してください。<br> (デフォルト: <code>10.128.0.0/9</code>)`,
        },
        deviceSubnetCidrRangeHelpText2: { en: `The Device Subnet range cannot be changed after a VPG has been created.`,
          ja: `デバイスサブネット IP アドレスレンジは作成後に変更できません。` },
        header: { en: `Create VPG`, ja: `VPG を追加` },
        sub_header: {
          en:
            `Create a new dedicated Virtual Private Gateway (VPG) on the Quoracomm platform. Virtual Private Gateway fees apply. For more details, please refer to the <a href="https://developers.example.com/en/docs/reference/fees/#virtual-private-gateway" target="_blank">Pricing &amp; Fee Schedule</a>.`,
          ja:
            `新しい Virtual Private Gateway（VPG）を作成します。VPG を作成すると、契約事務手数料、基本使用料、ご利用内容によって付加機能利用料が発生します。詳しくは<a href='https://quoracomm.jp/services/vpg/price/' class='alert-link' target='_blank'>料金ページ</a>を参照してください。`,
        },
        name: { en: `Name`, ja: `名前` },
        nameCanBeChangedLater: { en: `It is possible to update vpg name later.`, ja: `名前は作成後も変更できます。` },
        offset_id: { en: `Offset ID (0 - 16379)`, ja: `オフセット ID (0 - 16379)` },
        payment_ack: {
          en:
            `A VPG will incur additional cost. Please check <a href='https://developers.example.com/en/docs/reference/fees/' class='alert-link' target='_blank'>pricing</a> page before creating it.`,
          ja:
            `VPG を作成すると、セットアップ料金と、時間単位の利用料金 (基本料金など) が発生します。<a href='https://quoracomm.jp/services/vpg/price/' class='alert-link' target='_blank'>料金ページ</a>を参照してください。`,
        },
        placement: { en: `Rendezvous Point`, ja: `ランデブーポイント` },
        placement_select: { en: `Select a rendezvous point`, ja: `ランデブーポイントを選択` },
        placement_description: {
          en:
            `For more information, please refer to the <a href="https://developers.example.com/en/docs/reference/rendezvous-points/" target="blank">rendezvouz point documentation</a>.`,
          ja:
            `詳しくは、<a href="https://users.example.com/ja-jp/docs/rendezvous-point/" target='blank'>ランデブーポイント </a>を参照してください。`,
        },
        placement_warning: { en: `You cannot change the rendezvous point after the VPG is created.`,
          ja: `ランデブーポイントは作成後に変更できません。` },
        primary_service_name: { en: `Primary Service Name`, ja: `対象サービス` },
        submit: { en: `Create`, ja: `作成` },
        type: { en: `Type`, ja: `タイプ` },
        use_internet_gateway: { en: `Internet gateway`, ja: `インターネットゲートウェイ` },
        internet_gateway_description: {
          en: `The Internet Gateway provides routing from the VPG to public Internet infrastructure.`,
          ja:
            `インターネットゲートウェイを有効にすると、VPG に接続された SIM がインターネットに接続できるようになります。`,
        },
        internet_gateway_enable: { en: `Enable internet gateway`, ja: `インターネットゲートウェイを有効にする` },
        useInternetGatewayCannotBeChangedLater: {
          '12': {
            en:
              `The Internet Gateway setting cannot be modified after a VPG has been created. If you decide later to change the Internet Gateway behavior, you must create a new VPG.`,
            ja: `インターネットゲートウェイは作成後に変更できません。`,
          },
          '14': {
            en:
              `Internet gateway cannot be turned off. To block the route to the Internet, configure the Outbound Routing Filter after it is created.`,
            ja:
              `インターネットゲートウェイは OFF にできません。インターネットへの経路を遮断するには、アウトバウンドルーティングフィルターを作成後に設定してください。`,
          },
          '15': {
            en:
              `The Internet Gateway setting cannot be modified after a VPG has been created. If you decide later to change the Internet Gateway behavior, you must create a new VPG.`,
            ja: `インターネットゲートウェイは作成後に変更できません。`,
          },
          '120': {
            en:
              `The Internet Gateway setting cannot be modified after a VPG has been created. If you decide later to change the Internet Gateway behavior, you must create a new VPG.`,
            ja: `インターネットゲートウェイは作成後に変更できません。`,
          },
          '242': {
            en:
              `The Internet Gateway setting cannot be modified after a VPG has been created. If you decide later to change the Internet Gateway behavior, you must create a new VPG.`,
            ja: `インターネットゲートウェイは作成後に変更できません。`,
          },
          null: {
            en:
              `The Internet Gateway setting cannot be modified after a VPG has been created. If you decide later to change the Internet Gateway behavior, you must create a new VPG.`,
            ja: `インターネットゲートウェイは作成後に変更できません。`,
          },
        },
        vpgTypeCannotBeChangedLater: { en: `VPG Type cannot be changed after the VPG is created.`,
          ja: `VPG タイプは作成後に変更できません。` },
      },
      assignFixedIP: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        header: { en: `Fixed Global IP Address Option`, ja: `固定グローバル IP アドレスオプションを有効にする` },
        submit: { en: `Enable`, ja: `有効にする` },
        warning: {
          en:
            `Enabling 'Fixed Global IP Address Option' will incur additional cost. Please check <a href='https://developers.example.com/en/docs/reference/fees/' class='alert-link' target='_blank'>pricing</a> page before creating it.`,
          ja:
            `固定グローバル IP アドレスオプションを有効にすると、時間単位のご利用料金が発生します。詳しくは<a href="https://quoracomm.jp/services/vpg/price/" class="alert-link" target="_blank">料金ページ</a>をご確認ください。`,
        },
      },
      attach_group: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        group: { en: `Select a group`, ja: `グループ` },
        header: { en: `Attach a group`, ja: `グループを追加` },
        selectGroupPlaceholder: { en: `Select group or type to filter group`,
          ja: `グループを選択、または、絞り込み...` },
        submit: { en: `Attach`, ja: `追加` },
      },
      delete_gate_peer: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        confirmation: { en: `Are you sure you want to delete Gate Peer?`,
          ja: `Gate Peer を削除します。よろしいですか？` },
        deleted: { en: `Gate Peer is deleted`, ja: `Gate Peer を削除しました` },
        header: { en: `Delete Gate Peer`, ja: `Gate Peer を削除` },
        inner_ip_address: { en: `Device Subnet IP address`, ja: `デバイスサブネット内 IP アドレス` },
        outer_ip_address: { en: `Tunnel Endpoint IP address`, ja: `トンネル接続用 IP アドレス` },
        submit: { en: `Delete`, ja: `削除` },
      },
      delete_ip_address_map: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        confirmation: { en: `Are you sure you want to delete the entry?`, ja: `削除してもよろしいですか？` },
        deleted: { en: `Entry is deleted.`, ja: `設定を削除しました` },
        entry: {
          host_id: { en: `IMSI`, ja: `対象 SIM の IMSI` },
          ip_address: { en: `IP address`, ja: `IP アドレス` },
        },
        header: { en: `Delete an entry`, ja: `エントリを削除` },
        submit: { en: `Delete`, ja: `削除` },
      },
      delete_vpc_pc: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        destination_cidr_block: { en: `VPC CIDR Block`, ja: `VPC のアドレスレンジ` },
        header: { en: `Delete a VPC Peering Connection`, ja: `VPC Peering Connection を削除` },
        id: { en: `ID`, ja: `ID` },
        peer_owner_id: { en: `AWS Account ID`, ja: `AWS アカウント ID` },
        peer_vpc_id: { en: `AWS VPC ID`, ja: `AWS VPC ID` },
        submit: { en: `Delete`, ja: `削除` },
      },
      detach_group: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        caption: { en: `Are you sure you want to detach VPG from group?`,
          ja: `グループからVPGを解除します。よろしいですか？` },
        group: { en: `Group ID`, ja: `グループ` },
        header: { en: `Detach a group`, ja: `グループを解除` },
        submit: { en: `Detach`, ja: `解除` },
      },
      put_ip_address_map: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        created: { en: `Entry is saved.`, ja: `設定を保存しました` },
        header: { en: `Add Entry`, ja: `エントリを追加` },
        host_id: { en: `IMSI`, ja: `対象 SIM の IMSI` },
        ip_address: { en: `IP address`, ja: `IP アドレス` },
        ip_address_connection_info: {
          en:
            `IP addresses will be assigned the next time a device connects. If your device is currently connected, you will need to disconnect and reconnect in order to receive the new IP address.`,
          ja:
            `設定した IP アドレスは次に SIM がオンラインになったときに反映されます。現在 SIM がオンラインの場合、設定した IP アドレスを利用するためには一度セッションを切断して再接続してください。`,
        },
        ip_address_help_text: { en: `IP address should be in range of VPG subnet <code>{{vpgSubnet}}</code>`,
          ja:
            `IP アドレスはデバイスサブネット IP アドレスレンジ <code>{{vpgSubnet}}</code> の範囲内で指定してください。` },
        submit: { en: `Add`, ja: `追加` },
      },
      releaseFixedIP: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        header: { en: `Fixed Global IP Address Option`, ja: `固定グローバル IP アドレスオプションを無効にする` },
        submit: { en: `Disable`, ja: `無効にする` },
        warning: { en: `This action can't be undone. Are you sure you want to disable this option?`,
          ja:
            `固定グローバル IP アドレスオプションを無効にすると、割り当てられていたグローバル IP アドレスが開放されます。開放されたグローバル IP アドレスを元に戻すことはできません。よろしいですか？` },
      },
      terminate_vpg: {
        cancel: { en: `Do not terminate`, ja: `削除しない` },
        caption: { en: `This operation cannot be undone. Are you sure you want to delete this VPG?`,
          ja: `この VPG を削除します。この操作は取り消せません。よろしいですか？` },
        header: { en: `Terminating the VPG`, ja: `VPG を削除` },
        submit: { en: `Terminate`, ja: `削除` },
      },
    },
    name: { en: `Name`, ja: `名前` },
    navigate_to_junction_redirection: {
      en: `You can set up Quoracomm Junction redirection from "Junction Settings" tab.`,
      ja: `QUORACOMM Junction リダイレクションの設定は Junction 設定タブにあります。`,
    },
    no_data: { en: `No data`, ja: `データがありません` },
    no_outbound_source_ip: { en: `N/A (Closed Network)`, ja: `なし (完全閉域)` },
    number_of_online_sessions: { en: `Number of online sessions`, ja: `オンラインのセッション数` },
    offset_id: { en: `Offset ID`, ja: `Offset ID` },
    outbound_source_ip: { en: `Global IP Address`, ja: `グローバル IP アドレス` },
    placement: { en: `Rendezvous Point`, ja: `ランデブーポイント` },
    primary_service_name: { en: `Primary Service Name`, ja: `対象サービス` },
    region: { en: `Region`, ja: `リージョン` },
    rendezvous_point: { en: `Rendezvous Point`, ja: `ランデブーポイント` },
    session_stats_last_updated_at: { en: `Last updated at`, ja: `最終更新` },
    size: { en: `Size`, ja: `サイズ` },
    static_outbound_source_ip: { en: `Static`, ja: `固定` },
    status: { en: `Status`, ja: `状態` },
    tab: {
      access_control: { en: `Access control`, ja: `アクセス制御` },
      basic_settings: { en: `Basic settings`, ja: `基本設定` },
      closed_network: { en: `Closed Network`, ja: `閉域網設定` },
      device_lan: { en: `Device LAN`, ja: `デバイス LAN 設定` },
      gate_settings: { en: `Gate settings`, ja: `Gate 設定` },
      junction_settings: { en: `Junction settings`, ja: `Junction 設定` },
      routing_table: { en: `Routing table`, ja: `ルーティングテーブル` },
      tag_settings: { en: `Tag settings`, ja: `Tag 設定` },
      vpg_packet_capture_sessions: { en: `Packet capture`, ja: `パケットキャプチャ` },
    },
    tags: {
      maxTagsLimitMessage: { en: `You can't add more then 20 tags for VPG.`,
        ja: `VPG に設定できるタグの個数の上限を超えています。` },
    },
    terminate: { en: `Terminate`, ja: `このVPGを削除` },
    termination_disabled_warning: {
      en:
        `This VPG has either Quoracomm Direct or Quoracomm Door service activated, so it cannot be terminated. If you wish to terminate it, please <a href='https://support.example.com/hc/en-us/requests/new' target='_blank'>contact our support team</a> with the necessary details following the format found <a href='https://support.example.com/hc/en-us/articles/17649487685529' target='_blank'>here</a>.`,
      ja:
        `この VPG は、QUORACOMM Direct または QUORACOMM Door のいずれかのサービスが有効になっているため、削除できません。削除したい場合は、<a href="https://support.example.com/hc/ja/articles/17649487685529-VPG-%E3%82%92%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B%E3%81%AB%E3%81%AF%E3%81%A9%E3%81%86%E3%81%99%E3%82%8C%E3%81%B0%E3%82%88%E3%81%84%E3%81%A7%E3%81%99%E3%81%8B-" target="_blank">このフォーマット</a>に従って必要事項をサポートまで<a href="https://support.example.com/hc/ja/requests/new" target="_blank">お知らせください</a>。`,
    },
    termination_disabled_warning_canal_f2: {
      en:
        `This VPG has Canal service activated and is of Type-F2, so it cannot be terminated. If you wish to terminate it, please remove your transit gateway peering connections (Canal Peering) and transit gateway VPC attachments first. You can view your canal settings in the closed network tab.`,
      ja:
        `この VPG は QUORACOMM Canal サービスが有効になっており、Type-F2 であるため、削除できません。削除したい場合は、Transit Gateway ピアリング接続 (Canal ピアリング) および Transit Gateway VPC アタッチメントを削除してください。QUORACOMM Canal 設定は閉域網設定タブで確認できます。`,
    },
    title: { en: `VPG (Virtual Private Gateway)`, ja: `VPG (Virtual Private Gateway)` },
    transit_gateway_id: { en: `Transit Gateway ID`, ja: `Transit Gateway ID` },
    transit_gateway_asn: { en: `Transit Gateway ASN`, ja: `Transit Gateway ASN` },
    type: { en: `Type`, ja: `タイプ` },
    use_internet_gateway: { en: `Use Internet Gateway`, ja: `インターネットゲートウェイ` },
    values: {
      peer_region: {
        'af-south-1': { en: `Africa (Cape Town) af-south-1`, ja: `アフリカ（ケープタウン）af-south-1` },
        'ap-east-1': { en: `Asia Pacific (Hong Kong) ap-east-1`, ja: `アジアパシフィック（香港）ap-east-1` },
        'ap-northeast-1': { en: `Asia Pacific (Tokyo) ap-northeast-1`, ja: `アジアパシフィック (東京) ap-northeast-1` },
        'ap-northeast-2': { en: `Asia Pacific (Seoul) ap-northeast-2`,
          ja: `アジアパシフィック (ソウル) ap-northeast-2` },
        'ap-northeast-3': { en: `Asia Pacific (Osaka) ap-northeast-3`, ja: `アジアパシフィック (大阪) ap-northeast-3` },
        'ap-south-1': { en: `Asia Pacific (Mumbai) ap-south-1`, ja: `アジアパシフィック (ムンバイ) ap-south-1` },
        'ap-southeast-1': { en: `Asia Pacific (Singapore) ap-southeast-1`,
          ja: `アジアパシフィック (シンガポール) ap-southeast-1` },
        'ap-southeast-2': { en: `Asia Pacific (Sydney) ap-southeast-2`,
          ja: `アジアパシフィック (シドニー) ap-southeast-2` },
        'ca-central-1': { en: `Canada (Central) ca-central-1`, ja: `カナダ (中部) ca-central-1` },
        'eu-central-1': { en: `Europe (Frankfurt) eu-central-1`, ja: `欧州 (フランクフルト) eu-central-1` },
        'eu-north-1': { en: `Europe (Stockholm) eu-north-1`, ja: `欧州 (ストックホルム) eu-north-1` },
        'eu-south-1': { en: `Europe (Milan) eu-south-1`, ja: `欧州 (ミラノ) eu-south-1` },
        'eu-west-1': { en: `Europe (Ireland) eu-west-1`, ja: `欧州 (アイルランド) eu-west-1` },
        'eu-west-2': { en: `Europe (London) eu-west-2`, ja: `欧州 (ロンドン) eu-west-2` },
        'eu-west-3': { en: `Europe (Paris) eu-west-3`, ja: `欧州 (パリ) eu-west-3` },
        'me-south-1': { en: `Middle East (Bahrain) me-south-1`, ja: `中東（バーレーン）me-south-1` },
        'sa-east-1': { en: `South America (São Paulo) sa-east-1`, ja: `南米 (サンパウロ) sa-east-1` },
        'us-east-1': { en: `US East (N. Virginia) us-east-1`, ja: `米国東部 (バージニア北部) us-east-1` },
        'us-east-2': { en: `US East (Ohio) us-east-2`, ja: `米国東部 (オハイオ) us-east-2` },
        'us-west-1': { en: `US West (N. California) us-west-1`, ja: `米国西部 (北カリフォルニア) us-west-1` },
        'us-west-2': { en: `US West (Oregon) us-west-2`, ja: `米国西部 (オレゴン) us-west-2` },
      },
      placement: {
        frankfurt: { en: `Frankfurt (Germany)`, ja: `フランクフルト（ドイツ）` },
        oregon: { en: `Oregon (United States)`, ja: `オレゴン（アメリカ）` },
        tokyo: { en: `Tokyo (Japan)`, ja: `東京（日本）` },
      },
      rendezvous_point: {
        'ap-northeast-1': { en: `Tokyo (Japan)`, ja: `東京（日本）` },
        'ap-southeast-2': { en: `Sydney (Australia)`, ja: `シドニー（オーストラリア）` },
        'eu-central-1': { en: `Frankfurt (Germany)`, ja: `フランクフルト（ドイツ）` },
        'us-west-2': { en: `Oregon (United States)`, ja: `オレゴン（アメリカ）` },
      },
      status: {
        creating: { en: `Creating`, ja: `作成中` },
        failed: { en: `Failed`, ja: `作成失敗` },
        running: { en: `Running`, ja: `実行中` },
        terminated: { en: `Terminated`, ja: `削除済` },
        terminating: { en: `Terminating`, ja: `削除中` },
      },
      type: {
        '12': { en: `Type-C`, ja: `Type-C` },
        '13': { en: `Type-D`, ja: `Type-D` },
        '14': { en: `Type-E`, ja: `Type-E` },
        '15': { en: `Type-F`, ja: `Type-F` },
        '120': { en: `Type-X`, ja: `Type-X` },
        '242': { en: `Type-F2`, ja: `Type-F2` },
      },
      useInternetGateway: {
        false: { en: `No`, ja: `なし` },
        true: { en: `Yes`, ja: `あり` },
      },
    },
    vpc_peering_connections: {
      add: { en: `Add`, ja: `追加` },
      delete: { en: `Delete`, ja: `削除` },
      destination_cidr_block: { en: `VPC CIDR Block`, ja: `VPC のアドレスレンジ` },
      id: { en: `ID`, ja: `ID` },
      peer_owner_id: { en: `AWS Account ID`, ja: `AWS アカウント ID` },
      peer_region: { en: `AWS Region`, ja: `AWS リージョン` },
      peer_vpc_id: { en: `AWS VPC ID`, ja: `AWS VPC ID` },
      title: { en: `Quollabozo VPC Peering Connections`, ja: `Quollabozo VPC ピアリング接続` },
      subTitle: {
        en: 'Connect your Quoracomm Virtual Private Gateways (VPG) to a VPC',
        ja: 'VPG を AWS VPC に接続',
      },
    },
    vpg_ip_address_range: { en: `VPG IP Address Range`, ja: `VPG IP アドレスレンジ` },
    vpg_ip_address_range_note: { en: `Please contact our support if you need to know this property.`,
      ja: `この情報が必要な場合は、サポートまでお問い合わせください。` },
  },
};
