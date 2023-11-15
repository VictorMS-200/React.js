namespace ValorantAPI.Models;
public class FunctionName
{
     public string id { get; }
    public string name { get; set; }
    public string color { get; set; }  
    public string image { get; set; }

    public FunctionName(string name, string color, string image)
    {
        this.id = Guid.NewGuid().ToString().Substring(0,8);
        this.name = name;
        this.color = color;
        this.image = image;
    }
}