import styled, { keyframes } from 'styled-components';

const slideInFromBottom = keyframes`
  from {
    transform: translateY(55%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const slideInFromBottomCards = keyframes`
  from {
    transform: translateY(25%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const PortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f8f8f8;
  overflow-y: auto;
  background-color: var(--gray-900);
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin-top: 40px;
  place-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const BorderTitle = styled.div`
  border: 5px solid #fff;
  display: flex;
`;

export const AnimatedH1 = styled.h1`
  font-size: 28px;
  color: #fff;
  animation: ${slideInFromBottom} 1s ease-in-out forwards;
  padding: 1rem;
  text-align: center;
  width: 100%;
  transform-origin: bottom center;
`;

export const ProjectCard = styled.div`
  border: 1px solid var(---primary-darkest);
  border-radius: 8px;
  padding: 20px;
  background-color: rgba(42, 44, 47, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: stretch;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  height: 100%;
  max-width: 30rem;
  width: 100%;
  backdrop-filter: blur(10px);
  animation: ${slideInFromBottomCards} 1s ease-in-out forwards;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: var(---primary-darkest);
  }

  p {
    font-size: 16px;
    color: #fff;
    margin-bottom: 20px;
  }
`;

export const ScreenshotImage = styled.img`
  max-width: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 4px;
  align-self: flex-end;
`;
