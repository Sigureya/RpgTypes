interface Battle_Process {
  processAbort(): void;
  rocessPartyEscape(): void;
  onEscapeFailure(): void;
  processDefeat(): void;
  onEscapeSuccess(): void;
  processEscape(): void;
  processVictory(): void;
}
