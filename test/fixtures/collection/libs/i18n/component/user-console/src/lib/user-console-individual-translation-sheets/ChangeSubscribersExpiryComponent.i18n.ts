export const translations = {
    'ChangeSubscribersExpiryComponent': {
        'cancel': { en: `Cancel`, ja: `キャンセル` },
        'clear': { en: `Clear`, ja: `有効期限をクリア` },
        'confirm': { en: `Change Expiration Date`, ja: `有効期限を変更する` },
        'date': { en: `Date`, ja: `年月日` },
        'in_local_date': { en: `In Local Time`, ja: `ローカル日時` },
        'expiry_action': { en: `Expiry action`, ja: `期限切れ時のアクション` },
        'descriptions': {
            'deactivate': { en: `The session will be forcibly disconnected and the status of the SIM(s) will be changed to Inactive on the expiration date / time. It is not possible to create a new session in the inactive state. It is necessary to activate the SIM(s) and to clear the expiration date / time or reset the expiration date / time with newer one to be able to create a new session.`, ja: `有効期限を過ぎると、現在接続されているセッションを切断し、ステータスを休止中に変更します。休止中状態では新しいセッションを接続することができなくなります。再度セッションを接続できるようにするためには、ステータスを使用中に戻し、有効期限をクリアするか新しい日時で有効期限を再設定します。` },
            'deleteSession': { en: `The session will be forcibly disconnected on the expiration date / time. It will be impossible to create a new session after disconnection. It is required to clear the expiration date / time or reset the expiration date / time with newer one to be able to create a new session.`, ja: `有効期限を過ぎると、現在接続されているセッションを切断します。セッションが切れたあとはそのままでは再接続ができない状態になります。再度セッションを接続できるようにするためには有効期限をクリアするか、新しい日時で有効期限を再設定します。` },
            'doNothing': { en: `It will be impossible to create a new session with the SIM(s) after the expiration date / time. A session that is connected on the expiration date / time will be continued, but it will be impossible to create a new session after the session is disconnected. It is necessary to clear the expiration date / time or to reset the expiration date / time with a newer one to be able to create a new session again.`, ja: `有効期限を過ぎると、新規セッションの接続ができなくなります。有効期限を過ぎた瞬間に接続されていたセッションはそのまま維持されます。そのセッションが切れたあとは再接続ができない状態になります。再度セッションを接続できるようにするためには有効期限をクリアするか、新しい日時で有効期限を再設定します。` },
            'suspend': { en: `The session will be forcibly disconnected and the status of the SIM(s) will be changed to Suspended on the expiration date / time. It is necessary to activate the SIM(s) and to clear or update the expiration date / time to be able to create a new session. Please also note that while a SIM is suspended, its daily basic fee may be reduced or eliminated, but there may be a cost incurred when moving to or from the suspended state. (The exact details depend on the SIM's subscription plan type.)`, ja: `有効期限を過ぎると、現在接続されているセッションを切断し、ステータスを「利用中断中」に変更します。「利用中断中」状態では新しいセッションを接続することができなくなります。再度セッションを接続できるようにするためには、ステータスを「使用中」に戻し、有効期限をクリアするか新しい日時で有効期限を再設定します。なお、SIMを「利用中断中」状態にすると基本料金が減額されますが、「利用中断中」状態への変更1回、もしくは「利用中断中」から「使用中/休止中」状態への変更 1回につき料金が発生します。（詳細はご利用中の SIM のプランによって異なります）` },
            'terminate': { en: `The SIM(s) will be terminated on the expiration date/time. This action can only be set if termination protection for the SIM(s) is disabled. Once terminated, the SIM(s) cannot be reactivated.`, ja: `有効期限を過ぎると SIM を解約します。当アクションは、解約プロテクションが OFF となっている場合にのみ設定できます。解約された SIMを再び使用することはできません。` },
            'undefined': {
                'en': "",
                'ja': ""
            },
            'UNSET': { en: `The SIM(s) will not expire. Any existing expiry action setting will be removed.`, ja: `有効期限と有効期限切れ時のアクションを解除します。` }
        },
        'errorMessage': { en: `Unable to update expiry action. An unexpected error occurred.`, ja: `予期せぬエラーが発生したため、設定を更新できませんでした。` },
        'expiryActions': {
            'deactivate': { en: `Deactivate`, ja: `休止` },
            'deleteSession': { en: `Delete session`, ja: `セッション切断` },
            'doNothing': { en: `Do nothing`, ja: `保留` },
            'null': { en: `(not set)`, ja: `（なし）` },
            'suspend': { en: `Suspend`, ja: `利用中断` },
            'terminate': { en: `Terminate`, ja: `解約` },
            'undefined': { en: `(not set)`, ja: `（なし）` },
            'UNSET': { en: `No expiry action`, ja: `有効期限をクリア` }
        },
        'heading': {
            'multiple': { en: `Change expiration date for SIM`, ja: `SIM 有効期限変更` },
            'single': { en: `Change expiration date for SIMs`, ja: `SIM 有効期限変更` }
        },
        'message': { en: `Once these SIMs are expired, it is not possible to start a new data connection using the SIMs. It does not mean that the SIMs are deactivated or terminated. If you clear the expiration date/time or set another, it is possible to start a new connection again using these SIMs.`, ja: `有効期限が到来すると、これらの SIM を使って新しい通信セッションを開始できなくなります。SIM が休止状態になったり解約されたりするわけではありません。有効期限をクリアするか、別の有効期限を設定すると再びこれらのSIM で通信を行うことができるようになります。` },
        'new_expiry': { en: `New expiry date`, ja: `変更後の有効期限` },
        'successMessage': {
            'multiple': { en: `The expiry of the SIMs was successfully updated.`, ja: `有効期限を変更しました。` },
            'single': { en: `The expiry of the SIM was successfully updated.`, ja: `有効期限を変更しました。` }
        },
        'time': { en: `Time`, ja: `時刻` }
    }
};
