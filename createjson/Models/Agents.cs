using System.Text.Json.Serialization;


namespace ValorantAPI.Models;

public class Agents
{

    [JsonPropertyName("displayIcon")]
    public string? image { get; set; }
    
    [JsonPropertyName("fullPortrait")]
    public string? fullPortrait { get; set; }

    [JsonPropertyName("displayName")]
    public string? name { get; set; }

    [JsonPropertyName("description")]
    public string? description { get; set; }

    [JsonPropertyName("role")]
    public Role? role { get; set; }

    [JsonPropertyName("background")]
    public string? background { get; set; }

    [JsonPropertyName("abilities")]
    public List<Abilities>? abilities { get; set; }

    [JsonPropertyName("isPlayableCharacter")]
    public bool Exists { get; set; }

}   

public class Role 
{
    [JsonPropertyName("displayName")]
    public string? displayName { get; set; }
}

public class Abilities
{
    [JsonPropertyName("displayName")]
    public string? displayName { get; set; }

    [JsonPropertyName("description")]
    public string? description { get; set; }

    [JsonPropertyName("displayIcon")]
    public string? displayIcon { get; set; }
}
