using System.Text.Json.Serialization;


namespace ValorantAPI.Models;

public class Data
{
    
    [JsonPropertyName("data")]
    public List<Agents>? data { get; set; }
}