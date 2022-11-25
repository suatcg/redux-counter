import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement, increment, set } from './actions';
import { SetCounter } from './SetCounter';
import { useActions } from './use-actions';
import { useCounter } from './use-counter';

export const Counter = () => {
  const incident = 'Incident';
  // const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const { count, increment, decrement, set } = useCounter();

  // const actionsHook = useActions({
  //   increment,
  //   decrement,
  //   set
  // });

  const actions = bindActionCreators({ increment, decrement, set }, dispatch);

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => actions.set(0)}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
