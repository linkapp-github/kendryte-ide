import { localize } from 'vs/nls';
import { RawContextKey } from 'vs/platform/contextkey/common/contextkey';

export const KENDRYTE_FLASH_MANAGER_TITLE = localize('flashManagerEditor', 'Flash manager');
export const KENDRYTE_FLASH_MANAGER_ID = 'workbench.editor.flashManagerEditor';
export const KENDRYTE_FLASH_MANAGER_INPUT_ID = 'workbench.input.flashManagerEditor';

export const ACTION_ID_FLASH_MANGER_FLASH_ALL = 'workbench.action.kendryte.flash.files';

export const ACTION_ID_FLASH_MANGER_CREATE_ZIP = 'workbench.action.kendryte.flash.zip';

export const ACTION_ID_FLASH_MANGER_CREATE_ZIP_PROGRAM = 'workbench.action.kendryte.flash.zip.program';

export const FlashManagerFocusContext = new RawContextKey<boolean>('flashManagerEditorFocus', false);
