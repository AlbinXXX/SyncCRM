import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { Card } from '@/ui/layout/card/components/Card';
import { CardContent } from '@/ui/layout/card/components/CardContent';

type SettingsSummaryCardProps = {
  title: ReactNode;
  rightComponent: ReactNode;
};

const StyledCardContent = styled(CardContent)`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  min-height: ${({ theme }) => theme.spacing(6)};
`;

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.font.color.primary};
  display: flex;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  gap: ${({ theme }) => theme.spacing(2)};
  margin-right: auto;
`;

export const SettingsSummaryCard = ({
  title,
  rightComponent,
}: SettingsSummaryCardProps) => (
  <Card>
    <StyledCardContent>
      <StyledTitle>{title}</StyledTitle>
      {rightComponent}
    </StyledCardContent>
  </Card>
);
