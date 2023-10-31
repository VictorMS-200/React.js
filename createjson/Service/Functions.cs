using System.Text.Json;
using ValorantAPI.Models;


namespace ValorantAPI.Service;

public class Functions
{

    public List<AgentsJson> _agentsList = new List<AgentsJson>();

    public async Task GetAgentJsonAsync()
    {
        using (var client = new HttpClient())
        {
            try 
            {
                // Get the agents from the API
                var response = await client.GetStringAsync("https://valorant-api.com/v1/agents");
                
                // Deserialize the response
                var agents = JsonSerializer.Deserialize<Data>(response);

                // Add each agent to the list if they exist in the game
                foreach (var agent in agents!.data!)
                {
                    if (agent.Exists)
                        _agentsList.Add(new AgentsJson(
                            agent.name!, 
                            agent.description!, 
                            agent.image!, 
                            agent.role!.displayName!
                        ));
                }
                jsonSerialize();
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Request exception: {e.Message}");
                throw;
            }
        }
    }

    private void jsonSerialize()
    {
        using (FileStream fs = File.Create("agents.json"))
        {
            JsonSerializer.SerializeAsync(fs, _agentsList);
        }
    }
}
