import { connect } from 'react-redux';
import { getEmployee } from '../action/tableAction';
import TableComp from '../components/TableComp';

const actionsToProps = {
	getEmployee,
};

const stateToProps = currentState => {
	return {
		emp: currentState.table.emp,
	};
}

export default connect(stateToProps, actionsToProps)(TableComp);