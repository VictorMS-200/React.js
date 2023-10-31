using System.Text.Json.Serialization;


namespace ValorantAPI.Models;

public class Agents
{

    [JsonPropertyName("displayName")]
    public string? name { get; set; }

    [JsonPropertyName("description")]
    public string? description { get; set; }

    [JsonPropertyName("displayIcon")]
    public string? image { get; set; }

    [JsonPropertyName("role")]
    public Role? role { get; set; }

    [JsonPropertyName("isPlayableCharacter")]
    public bool Exists { get; set; }
}

public class Role 
{
    
    [JsonPropertyName("displayName")]
    public string? displayName { get; set; }
}