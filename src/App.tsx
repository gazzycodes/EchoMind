import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Play, Pause, Settings, Minimize2 } from 'lucide-react';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { Layout } from './components/Layout/Layout';
import { Card } from './components/UI/Card';
import { Button } from './components/UI/Button';
import { Slider } from './components/UI/Slider';
import styled from 'styled-components';

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const SoundControlsCard = styled(Card)`
  grid-column: 1 / -1;
`;

const SoundGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const SoundItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-1px);
  }
`;

const SoundHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SoundIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent.primary}, ${({ theme }) => theme.colors.accent.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const SoundName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const TimerCard = styled(Card)`
  text-align: center;
`;

const TimerDisplay = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.accent.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  text-shadow: 0 0 20px ${({ theme }) => theme.colors.accent.primary}40;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent.primary}, ${({ theme }) => theme.colors.accent.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const TimerControls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const PresetsCard = styled(Card)``;

const PresetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const PresetButton = styled(Button)`
  height: 60px;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);

  // Sound levels state
  const [soundLevels, setSoundLevels] = useState({
    rain: 0,
    forest: 0,
    ocean: 0,
    wind: 0,
    whitenoise: 0,
  });



  const sounds = [
    { id: 'rain', name: 'Rain', icon: '🌧️' },
    { id: 'forest', name: 'Forest', icon: '🌲' },
    { id: 'ocean', name: 'Ocean', icon: '🌊' },
    { id: 'wind', name: 'Wind', icon: '💨' },
    { id: 'whitenoise', name: 'White Noise', icon: '📻' },
  ];

  const presets = [
    { name: 'Focus', icon: '🎯' },
    { name: 'Relax', icon: '😌' },
    { name: 'Sleep', icon: '😴' },
    { name: 'Study', icon: '📚' },
  ];

  const handleSoundChange = (soundId: string, value: number) => {
    setSoundLevels(prev => ({
      ...prev,
      [soundId]: value
    }));
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (minutes: number, seconds: number) => {
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const headerActions = (
    <>
      <Button variant="ghost" icon={<Settings size={18} />} />
      <Button variant="ghost" icon={<Minimize2 size={18} />} />
    </>
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout headerActions={headerActions}>
        <AppGrid>
          <SoundControlsCard>
            <h2>Sound Layers</h2>
            <SoundGrid>
              {sounds.map((sound) => (
                <SoundItem key={sound.id}>
                  <SoundHeader>
                    <SoundIcon>{sound.icon}</SoundIcon>
                    <SoundName>{sound.name}</SoundName>
                  </SoundHeader>
                  <Slider
                    value={soundLevels[sound.id as keyof typeof soundLevels]}
                    onChange={(value) => handleSoundChange(sound.id, value)}
                    max={1}
                    step={0.01}
                    showValue={true}
                  />
                </SoundItem>
              ))}
            </SoundGrid>
          </SoundControlsCard>

          <TimerCard>
            <h2>Pomodoro Timer</h2>
            <TimerDisplay>
              {formatTime(timerMinutes, timerSeconds)}
            </TimerDisplay>
            <TimerControls>
              <Button
                variant="primary"
                icon={isPlaying ? <Pause size={18} /> : <Play size={18} />}
                onClick={togglePlayback}
              >
                {isPlaying ? 'Pause' : 'Start'}
              </Button>
              <Button variant="secondary">Reset</Button>
            </TimerControls>
          </TimerCard>

          <PresetsCard>
            <h2>Sound Presets</h2>
            <PresetGrid>
              {presets.map((preset) => (
                <PresetButton key={preset.name} variant="secondary">
                  <span style={{ fontSize: '20px' }}>{preset.icon}</span>
                  {preset.name}
                </PresetButton>
              ))}
            </PresetGrid>
          </PresetsCard>
        </AppGrid>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
