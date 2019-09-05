using Microsoft.AspNetCore.SignalR;
using SignalRExampleServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRExampleServer.HubConfig
{
    public class ChartHub : Hub
    {
        public async Task BroadcastChartData(List<ChartModel> data)
        {
            await Clients.All.SendAsync("broadcastchartdata", data);
        }

        public async Task BroadcastNumber(int number)
        {
            await Clients.All.SendAsync("broadcastnumberchannel", number);
        }

        public async Task BroadcastNumberByItemId(int itemId, int number)
        {
            await Clients.All.SendAsync(itemId.ToString(), number);
        }
    }
}
