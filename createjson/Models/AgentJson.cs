namespace ValorantAPI.Models;

public class AgentsJson
{
    public string? fullPortrait { get; set; }
    public string id { get; }
    public string? name { get; set; }
    public string? description { get; set; }
    public string? image { get; set; }
    public string? role { get; set; }
    public string? background { get; set; }
    public List<Abilities>? abilities { get; set; }

    public AgentsJson(string name, string description, string image, string role, string background, string fullPortrait, List<Abilities>? abilities)
    {
        this.id = Guid.NewGuid().ToString().Substring(0,8);
        this.name = name;
        this.description = description;
        this.image = image;
        this.role = role;
        this.background = background;
        this.fullPortrait = fullPortrait;
        this.abilities = abilities;
    }
}