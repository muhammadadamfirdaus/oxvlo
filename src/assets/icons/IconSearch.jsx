import Icon from '@/app/components/utilities/Icon';

function IconSearch(props) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.5" y2="16.5" />
      </svg>
    </Icon>
  );
}

export default IconSearch;
