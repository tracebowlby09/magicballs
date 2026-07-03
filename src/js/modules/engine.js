export class DecisionEngine {
  constructor(responses) {
    this.responses = responses;
    this.totalWeight = this.responses.reduce((sum, res) => sum + res.weight, 0);
  }

  getRandomResponse() {
    let random = Math.random() * this.totalWeight;
    for (const response of this.responses) {
      if (random < response.weight) {
        return response;
      }
      random -= response.weight;
    }
    return this.responses[0]; // Absolute fallback safety boundary
  }
}
