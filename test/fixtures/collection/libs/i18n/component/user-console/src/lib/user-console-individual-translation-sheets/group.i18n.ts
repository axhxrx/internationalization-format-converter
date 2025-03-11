export const translations = {
    'group': {
        'actions': {
            'set_group_dialog': {
                'group': { en: `Group`, ja: `グループ` },
                'resource': { en: `Resource`, ja: `リソース` },
                'title': { en: `Set Group`, ja: `グループ設定` }
            },
            'set_group': {
                'result_message': {
                    'multi': {
                        'failure': { en: `Failed to set group ({{groupName}}) for {{numFailure}} out of {{total}} {{resourceType}}s ({{resourcesLabel}}). {{ reason }}`, ja: `{{total}} 個中 {{numFailure}} 個の {{resourceType}} ({{resourcesLabel}}) のグループを{{groupName}}に設定できませんでした。 {{reason}}` },
                        'success': { en: `Successfully set group ({{groupName}}) for {{total}} {{resourceType}}s ({{resourcesLabel}})`, ja: `{{total}} 個の {{resourceType}} ({{resourcesLabel}})のグループを {{ groupName }}に設定しました` }
                    },
                    'single': {
                        'failure': { en: `Failed to set group ({{groupName}}) for a {{resourceType}} ({{resourcesLabel}}). {{ reason }}`, ja: `{{resourceType}} ({{resourcesLabel}}) のグループを {{groupName}} に設定できませんでした。 {{reason}}` },
                        'success': { en: `Successfully set group ({{groupName}}) for a {{resourceType}} ({{resourcesLabel}})`, ja: `{{resourceType}} ({{resourcesLabel}}) のグループを {{groupName}} に設定しました` }
                    }
                }
            },
            'unset_group': {
                'result_message': {
                    'multi': {
                        'failure': { en: `Failed to unset group for {{numFailure}} out of {{total}} {{resourceType}}s ({{resourcesLabel}}). {{ reason }}`, ja: `{{nALl}} 個中 {{numFailure}} 個の {{resourceType}} ({{resourcesLabel}}) のグループ設定を解除できませんでした。{{reason}}` },
                        'success': { en: `Successfully unset group for {{total}} {{resourceType}}s ({{resourcesLabel}})`, ja: `{{total}} 個の {{resourceType}} ({{resourcesLabel}})のグループ設定を解除しました` }
                    },
                    'single': {
                        'failure': { en: `Failed to unset group for a {{resourceType}} ({{resourcesLabel}}). {{ reason }}`, ja: `{{resourceType}} ({{resourcesLabel}}) のグループ設定を解除できませんでした。{{reason}}` },
                        'success': { en: `Successfully unset group for a {{resourceType}} ({{resourcesLabel}})`, ja: `{{resourceType}} ({{resourcesLabel}}) のグループ設定を解除しました` }
                    }
                }
            }
        },
        'name': {
            'load_error': { en: `(load error)`, ja: `(読み込みエラー)` },
            'loading': { en: `(loading...)`, ja: `(読み込み中...)` },
            'no_group_assigned': { en: `(no group)`, ja: `(グループなし)` },
            'no_name': { en: `(no name)`, ja: `(グループ名なし)` },
            'not_found': { en: `(group not found)`, ja: `(不明)` }
        }
    }
};
