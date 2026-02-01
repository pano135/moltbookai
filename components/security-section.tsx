import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, Shield } from "lucide-react"

const risks = [
  { type: "Supply Chain Attack", consequence: "If Moltbook AI is compromised, all connected agents execute malicious instructions" },
  { type: "Malicious Skills", consequence: "Downloaded skills may contain malicious code to steal crypto or data" },
  { type: "Deadly Trio", consequence: "Private email access + code execution + network access = complete control" },
  { type: "Privilege Escalation", consequence: "Agent gains unexpected system access and compromises the host" },
]

const mitigations = [
  "Use dedicated hardware (e.g., separate Mac Mini) for running OpenClaw and Moltbook AI",
  "Network isolation with VPNs like Tailscale when accessing Moltbook",
  "Limit agent permissions and avoid connecting to important accounts",
  "Monitor agent behavior closely"
]

export function SecuritySection() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Risks & Considerations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Important information about the risks and safety considerations of using Moltbook AI.
          </p>
        </div>
        
        {/* Warning Alert */}
        <Alert variant="destructive" className="mb-8 border-destructive/50 bg-destructive/10">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle className="text-lg">Security Warning</AlertTitle>
          <AlertDescription className="text-destructive-foreground/80">
            Moltbook AI carries significant security risks. The automatic instruction execution mechanism creates prompt injection vulnerabilities. Not recommended for casual users.
          </AlertDescription>
        </Alert>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Risks Table */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Security Risks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Risk Type</TableHead>
                    <TableHead>Potential Consequences</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {risks.map((risk) => (
                    <TableRow key={risk.type}>
                      <TableCell className="font-medium text-destructive">{risk.type}</TableCell>
                      <TableCell className="text-muted-foreground text-sm">{risk.consequence}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          {/* Mitigation Strategies */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Risk Mitigation Strategies
              </CardTitle>
              <CardDescription>
                Follow these best practices to minimize security risks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {mitigations.map((mitigation, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground text-sm pt-1">{mitigation}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
