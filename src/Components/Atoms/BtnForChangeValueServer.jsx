import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { optionInputWichChange } from '../../const'
import { updateValueOfServer } from '../../store/action/updateValuesOfServer'

const BtnForChangeValueServer = ({
  index,
  value,
  updateValueOfServer,
  className,
}) => {
  return (
    <button
      className={className}
      onClick={() => {
        updateValueOfServer(null, index, value[0], optionInputWichChange[0])
      }}
    >
      Изменить
    </button>
  )
}

BtnForChangeValueServer.propTypes = {
  index: PropTypes.number,
  updateValueOfServer: PropTypes.func,
  value: PropTypes.array,
}

const mapToDispatch = (dispatch) => ({
  updateValueOfServer: (id, index, type, option) =>
    dispatch(updateValueOfServer(id, index, type, option)),
})

export default memo(connect(null, mapToDispatch)(BtnForChangeValueServer))
