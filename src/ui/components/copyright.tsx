import { AppConfig } from '../../utils/app-config';

export const Copyright = ({ size }: { size?: 'md' | 'sm' }) => (
  <span className={size === 'sm' ? 'text-sm' : 'text-md'}>
    © Copyright {new Date().getFullYear()} {AppConfig.legalName}
  </span>
);
