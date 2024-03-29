import React from 'react';

import {
  SocialsWrapper, FCCIcon, IconWrapper, GithubIcon, LinkedinIcon,
  KattisIcon, SourcererIcon, MailIcon, TooltipText
} from './styles';

export default function Socials() {
  return (
    <>
      <SocialsWrapper>
        <IconWrapper path="https://github.com/Davigl" title="github">
          <TooltipText> Github </TooltipText>
          <GithubIcon />
        </IconWrapper>
        <IconWrapper path="https://www.linkedin.com/in/davi-guimaraes/" title="linkedin">
          <TooltipText> Linkedin </TooltipText>
          <LinkedinIcon />
        </IconWrapper>
        <IconWrapper path="https://sourcerer.io/davigl" title="sourcerer">
          <TooltipText> Sourcerer </TooltipText>
          <SourcererIcon />
        </IconWrapper>
        <IconWrapper path="https://open.kattis.com/users/davigl" title="open-kattis">
          <TooltipText> Open Kattis </TooltipText>
          <KattisIcon />
        </IconWrapper>
        <IconWrapper path="https://www.freecodecamp.org/hasashisama" title="freecodecamp">
          <TooltipText> freeCodeCamp </TooltipText>
          <FCCIcon />
        </IconWrapper>
        <IconWrapper path="mailto:davi.guimaraesleite@gmail.com" title="contact">
          <TooltipText> Contact </TooltipText>
          <MailIcon />
        </IconWrapper>
      </SocialsWrapper>
    </>
  );
}
