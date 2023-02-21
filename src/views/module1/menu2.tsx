import { useState } from 'react';
import { useStore, observer } from '@/hooks/storeHook';
import '@/css/menu/menu2.scss';

const Menu2 = () => {
  const { userStore } = useStore();

  const onSetStore = () => {
    userStore.add();
  };

  return (
    <div>
      <p className="number">{userStore.count}</p>
      <button onClick={onSetStore}>+</button>
    </div>
  );
};

export default observer(Menu2);
