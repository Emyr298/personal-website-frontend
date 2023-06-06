import React from 'react';
import { AboutMeProps } from './interface';

export const AboutMe : React.FC<AboutMeProps> = ({
  description,
}) => {
  return (
    <div>
      <p>
        {description}
      </p>
    </div>
  );
};
