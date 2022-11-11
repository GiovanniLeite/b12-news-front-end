import * as Styled from './styles';

export type MainContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
