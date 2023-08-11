import { projects } from '../../projects/projectData';
import * as S from './styles';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <S.PortfolioContainer>
      <S.BorderTitle>
        <S.AnimatedH1>PUPPETEER PROJECT</S.AnimatedH1>
      </S.BorderTitle>

      <S.ProjectsContainer>
        {projects.map((project) => (
          <S.ProjectCard key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <S.ScreenshotImage
              src={`/screenshots/${project.id}.png`}
              alt={project.name}
            />
          </S.ProjectCard>
        ))}
      </S.ProjectsContainer>
    </S.PortfolioContainer>
  );
};
