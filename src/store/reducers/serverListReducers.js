import {
  ERROR_TO_SERVER_FOR_SERVER_LIST,
  REQUEST_TO_SERVER_FOR_SERVER_LIST,
  SELECTION_SERVER_FOR_VIEW,
  SUCCESS_REQUEST_TO_SERVER_FOR_SERVER_LIST,
  OPEN_INPUT_FOR_CHANGE_VALUE_SERVER,
  CLOSE_INPUT_FOR_CHANGE_VALUE_SERVER,
  REQUEST_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
  SUCCESS_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
  ERROR_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
} from '../../const'

const initialState = {
  isLoading: false,
  isLoadingRequestToChangeValueServer: false,
  isErrorRequestToChangeValueServer: false,
  isError: false,
  serverList: [],
  selectedServer: [],
  pageOpenSelectedServer: false,
  BoolenValueInputChangeNameServer: false,
  selectedInputWhichChangeValues: ['', ''],
}

export const serverListReducers = (
  state = initialState,
  {
    type,
    serverList,
    selectedServerId,
    updateValuesServer,
    idSelectedInputWhichChangeValue,
    typeSelectedInputWhichChangeValue,
    idServer,
  },
) => {
  switch (type) {
    case REQUEST_TO_SERVER_FOR_CHANGE_VALUE_SERVER:
      return {
        ...state,
        isLoadingRequestToChangeValueServer: true,
      }
    case SUCCESS_TO_SERVER_FOR_CHANGE_VALUE_SERVER:
      return {
        ...state,
        serverList: [...serverList],
        selectedServer: [updateValuesServer, idSelectedInputWhichChangeValue],
        isErrorRequestToChangeValueServer: false,
        isLoadingRequestToChangeValueServer: false,
      }
    case ERROR_TO_SERVER_FOR_CHANGE_VALUE_SERVER:
      return {
        ...state,
        isErrorRequestToChangeValueServer: true,
        isLoadingRequestToChangeValueServer: false,
      }
    case OPEN_INPUT_FOR_CHANGE_VALUE_SERVER:
      state.selectedInputWhichChangeValues[
        idSelectedInputWhichChangeValue
      ] = typeSelectedInputWhichChangeValue
      return {
        ...state,
        selectedInputWhichChangeValues: [
          ...state.selectedInputWhichChangeValues,
        ],
      }
    case CLOSE_INPUT_FOR_CHANGE_VALUE_SERVER:
      state.selectedInputWhichChangeValues[idSelectedInputWhichChangeValue] = ''
      return {
        ...state,
        selectedInputWhichChangeValues: [
          ...state.selectedInputWhichChangeValues,
        ],
      }
    case SELECTION_SERVER_FOR_VIEW:
      return {
        ...state,
        selectedServer: [state.serverList[selectedServerId], +selectedServerId],
        pageOpenSelectedServer: true,
        selectedInputWhichChangeValues: ['', ''],
      }
    case REQUEST_TO_SERVER_FOR_SERVER_LIST:
      return {
        ...state,
        isLoading: true,
      }

    case SUCCESS_REQUEST_TO_SERVER_FOR_SERVER_LIST:
      return {
        ...state,
        isLoading: false,
        serverList: serverList,
      }
    case ERROR_TO_SERVER_FOR_SERVER_LIST:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }

    default:
      return state
  }
}
