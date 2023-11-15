using System.Text.Json;
using ValorantAPI.Models;


namespace ValorantAPI.Service;

public class Functions
{
    public List<AgentsJson> _agentsList = new List<AgentsJson>();

    public List<FunctionName> _functionList = new List<FunctionName>(
        new FunctionName[]
        {
            new FunctionName("Duelist", "#3b95c9", "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png"),
            new FunctionName("Sentinel", "#64ae19", "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png"),
            new FunctionName("Controller", "#d6772a", "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png"),
            new FunctionName("Initiator", "#a575e1", "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png")
        }
    );

    public async Task GetJsonFuction()
    {
        using (FileStream fs = File.Create("../my-app/src/functions.json"))
        {
            await JsonSerializer.SerializeAsync(fs, _functionList);
        }
    }

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
                            agent.role!.displayName!,
                            agent.background!,
                            agent.fullPortrait!,
                            agent.abilities
                        ));
                }
                jsonSerialize();
                Console.WriteLine("Agents.json created successfully");
            }
            
            // Catch any errors
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Request exception: {e.Message}");
                throw;
            }
        }
    }

    // Serialize the list to a json file
    private async void jsonSerialize()
    {
        using (FileStream fs = File.Create("../my-app/src/agents.json"))
        {
            await JsonSerializer.SerializeAsync(fs, _agentsList);
        }
    }
}
