import Icon from '@/app/components/utilities/Icon';

function IconCheckCircle(props) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.5V12a10 10 0 1 1-5.9-9.1" />
        <polyline points="22 4 12 14.5 9 11.5" />
      </svg>
    </Icon>
  );
}

export default IconCheckCircle;
