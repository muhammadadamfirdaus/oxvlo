import Icon from '@/app/components/utilities/Icon';

function IconRefresh(props) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-6.2-8.5" />
        <polyline points="21 4 21 9 16 9" />
        <path d="M3 12a9 9 0 0 0 14 7" />
      </svg>
    </Icon>
  );
}

export default IconRefresh;
