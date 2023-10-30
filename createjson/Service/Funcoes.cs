using System.Text.Json;
using ValorantAPI.Models;


namespace ValorantAPI.Service;

public class Funcoes
{

    public List<AgentsJson> _agentsList = new List<AgentsJson>();

    public async Task GetAgentAsync()
    {
        using (var client = new HttpClient())
        {
            try 
            {
                var response = await client.GetStringAsync("https://valorant-api.com/v1/agents");
                var agents = JsonSerializer.Deserialize<Data>(response);

                foreach (var agent in agents!.data!)
                {
                    if (agent.Exists) 
                    {
                        var agentObj = new AgentsJson(agent.name!, agent.description!, agent.image!, agent.role!.displayName!);
                        _agentsList.Add(agentObj);
                    }
                }
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Request exception: {e.Message}");
                throw;
            }
        }
    }

    public void jsonSerialize()
    {
        using (FileStream fs = File.Create("agents.json"))
        {
            JsonSerializer.SerializeAsync(fs, _agentsList);
        }
        Console.WriteLine();
    }
}
