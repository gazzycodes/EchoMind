import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  label?: string;
  showValue?: boolean;
  className?: string;
}

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
`;

const SliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SliderLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const SliderValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.accent.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
`;

const SliderTrack = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.slider.track};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.border.secondary};
  }
`;

const SliderFill = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'percentage',
})<{ percentage: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent.primary}, ${({ theme }) => theme.colors.accent.secondary});
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: ${({ theme }) => theme.transitions.fast};
`;

const SliderThumb = styled.div.withConfig({
  shouldForwardProp: (prop) => !['percentage', 'isDragging'].includes(prop),
})<{ percentage: number; isDragging: boolean }>`
  position: absolute;
  top: 50%;
  left: ${({ percentage }) => percentage}%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  background: ${({ theme }) => theme.colors.slider.thumb};
  border: 2px solid ${({ theme }) => theme.colors.background.primary};
  border-radius: 50%;
  cursor: grab;
  transition: ${({ theme, isDragging }) => isDragging ? 'none' : theme.transitions.fast};
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
  
  &:active {
    cursor: grabbing;
    transform: translate(-50%, -50%) scale(1.2);
  }
  
  ${({ isDragging }) => isDragging && `
    transform: translate(-50%, -50%) scale(1.2);
    cursor: grabbing;
  `}
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  margin: 0;
`;

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label,
  showValue = true,
  className,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const percentage = ((value - min) / (max - min)) * 100;
  
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(Number(event.target.value));
    }
  }, [onChange, disabled]);
  
  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);
  
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);
  
  React.useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    
    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
    }
  }, [isDragging]);
  
  const formatValue = (val: number) => {
    if (max <= 1) {
      return (val * 100).toFixed(0) + '%';
    }
    return val.toString();
  };
  
  return (
    <SliderContainer className={className}>
      {(label || showValue) && (
        <SliderHeader>
          {label && <SliderLabel>{label}</SliderLabel>}
          {showValue && <SliderValue>{formatValue(value)}</SliderValue>}
        </SliderHeader>
      )}
      
      <SliderTrack>
        <SliderFill percentage={percentage} />
        <SliderThumb 
          percentage={percentage} 
          isDragging={isDragging}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
        <HiddenInput
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      </SliderTrack>
    </SliderContainer>
  );
};
