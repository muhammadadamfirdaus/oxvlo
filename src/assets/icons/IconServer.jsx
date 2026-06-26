import Icon from '@/app/components/utilities/Icon';

function IconServer(props) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="8" rx="1.5" />
        <rect x="2" y="13" width="20" height="8" rx="1.5" />
        <line x1="6" y1="7" x2="6.01" y2="7" />
        <line x1="6" y1="17" x2="6.01" y2="17" />
      </svg>
    </Icon>
  );
}

export default IconServer;
