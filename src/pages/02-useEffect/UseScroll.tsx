import { useScroll } from '@/hooks/useScroll';

const UseScroll = () => {
  const { y } = useScroll();
  return (
    <div style={{ height: '1000vh' }}>
      <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>
        Hello
      </h1>
    </div>
  );
};

export default UseScroll;
