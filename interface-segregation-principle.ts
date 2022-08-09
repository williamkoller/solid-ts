interface ExternalIntegration {
  requestInfo(): void;
}

interface RepositoryExternalIntegration extends ExternalIntegration {
  authentication(): void;
}

class GithubExternalIntegration implements RepositoryExternalIntegration {
  public authentication(): void {}
  public requestInfo(): void {}
}

class GitlabExternalIntegration implements RepositoryExternalIntegration {
  public authentication(): void {}
  public requestInfo(): void {}
}

class WeatherExternalIntegration implements ExternalIntegration {
  public requestInfo(): void {}
}
