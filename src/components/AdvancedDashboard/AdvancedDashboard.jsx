import React, { useState, Suspense, useContext, useMemo } from 'react';
import styles from './AdvancedDashboard.module.css';
import { useFetch } from '../../hooks/useFetch';
import { AuthContext } from '../../context/AuthContext';

// Lazy load the component
const AdminPanel = React.lazy(() => import('./AdminPanel'));

export const AdvancedDashboard = () => {
  const { user } = useContext(AuthContext);
  const { data } = useFetch('https://jsonplaceholder.typicode.com/users');

  const filteredData = useMemo(() => data?.slice(0, 3), [data]);

  return (
    <div className={styles.container}>
      <h1>Welcome, {user?.name}</h1>
      
      {/* Suspense shows a fallback UI while AdminPanel is loading */}
      <Suspense fallback={<div className={styles.loader}>Loading Admin Panel...</div>}>
        <AdminPanel data={filteredData} />
      </Suspense>
    </div>
  );
};