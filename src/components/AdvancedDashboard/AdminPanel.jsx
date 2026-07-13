import styles from './AdvancedDashboard.module.css';

export default function AdminPanel({ data }) {
  return (
    <div className={styles.adminPanel}>
      <h2>Admin Panel (Lazy Loaded)</h2>
      <p>Total Users Managed: {data?.length}</p>
      <ul>
        {data?.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}