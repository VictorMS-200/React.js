namespace ValorantAPI.Models;

public class AgentsJson
{
    public string id { get; }
    public string? name { get; set; }
    public string? description { get; set; }
    public string? image { get; set; }
    public string? role { get; set; }
    public bool favourite { get; private set; } = false;

    public AgentsJson(string name, string description, string image, string role)
    {
        this.id = Guid.NewGuid().ToString().Substring(0,8);
        this.name = name;
        this.description = description;
        this.image = image;
        this.role = role;
    }
}