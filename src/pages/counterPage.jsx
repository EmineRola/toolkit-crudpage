import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, setCount } from "../App/counterSlice";
import { Stack, Button } from "react-bootstrap";

const CounterPage = () => {
  const state = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <Stack gap={2} className="col-md-3 mx-auto">
        <Button>{state.counter}</Button>
        <Button variant="success" onClick={() => dispatch(increase())}>
          Artır
        </Button>
        <Button variant="danger" onClick={() => dispatch(decrease())}>
          Azalt
        </Button>
        <Button variant="secondary" onClick={() => dispatch(setCount(0))}>
          SIFIRLA
        </Button>
      </Stack>
    </div>
  );
};

export default CounterPage;
