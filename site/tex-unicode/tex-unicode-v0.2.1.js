!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.TeXUnicode={})}(this,function(e){"use strict";const t={lbrack:"[",backslash:"\\",rbrack:"]",sphat:"^",_:"_​",sptilde:"~",AE:"Æ",ae:"æ",ss:"ß",OE:"Œ",oe:"œ",O:"Ø",o:"ø",L:"Ł",l:"ł",DH:"Ð",dh:"ð",DJ:"Đ",dj:"đ",NG:"Ŋ",ng:"ŋ",TH:"Þ",th:"þ",cent:"¢",pounds:"£",currency:"¤",yen:"¥",spddot:"¨",neg:"¬",circledR:"®",pm:"±",times:"×",eth:"ð",div:"÷",imath:"ı",i:"ı",jmath:"ȷ",j:"ȷ",alpha:"α",Alpha:"Α",beta:"β",Beta:"Β",varbeta:"ϐ",gamma:"γ",Gamma:"Γ",delta:"δ",Delta:"Δ",epsilon:"ϵ",Epsilon:"Ε",varepsilon:"ε",zeta:"ζ",Zeta:"Ζ",eta:"η",Eta:"Η",theta:"θ",Theta:"Θ",vartheta:"ϑ",iota:"ι",Iota:"Ι",kappa:"κ",Kappa:"Κ",varkappa:"ϰ",lambda:"λ",Lambda:"Λ",mu:"μ",Mu:"Μ",nu:"ν",Nu:"Ν",xi:"ξ",Xi:"Ξ",omicron:"ο",Omicron:"Ο",pi:"π",Pi:"Π",varpi:"ϖ",rho:"ρ",Rho:"Ρ",varrho:"ϱ",sigma:"σ",Sigma:"Σ",varsigma:"ς",tau:"τ",Tau:"Τ",upsilon:"υ",Upsilon:"ϒ",phi:"ϕ",Phi:"Φ",varphi:"φ",chi:"χ",Chi:"Χ",psi:"ψ",Psi:"Ψ",omega:"ω",Omega:"Ω",Qoppa:"Ϙ",qoppa:"ϙ",Stigma:"Ϛ",stigma:"ϛ",Digamma:"Ϝ",digamma:"ϝ",Koppa:"Ϟ",koppa:"ϟ",Sampi:"Ϡ",sampi:"ϡ",backepsilon:"϶",dagger:"†",ddagger:"‡",bullet:"•",prime:"′",second:"″",third:"‴",backprime:"‵",cat:"⁀",fourth:"⁗",Euler:"ℇ",hslash:"ℏ",HBar:"ℏ",Im:"ℑ",ell:"ℓ",wp:"℘",Re:"ℜ",tcohm:"Ω",mho:"℧",Angstroem:"Å",Finv:"Ⅎ",aleph:"ℵ",beth:"ℶ",gimel:"ℷ",daleth:"ℸ",Yup:"⅄",CapitalDifferentialD:"ⅅ",DifferentialD:"ⅆ",ExponetialE:"ⅇ",ComplexI:"ⅈ",ComplexJ:"ⅉ",invamp:"⅋",gets:"←",leftarrow:"←",Leftarrow:"⇐",to:"→",rightarrow:"→",Rightarrow:"⇒",leftrightarrow:"↔",Leftrightarrow:"⇔",uparrow:"↑",Uparrow:"⇑",downarrow:"↓",Downarrow:"⇓",updownarrow:"↕",longleftarrow:"⟵",Longleftarrow:"⟸",longrightarrow:"⟶",Longrightarrow:"⟹",longleftrightarrow:"⟷",Longleftrightarrow:"⟺",mapsto:"↦",longmapsto:"⟼",nearrow:"↗",searrow:"↘",swarrow:"↙",nwarrow:"↖",leftharpoonup:"↼",rightharpoonup:"⇀",leftharpoondown:"↽",rightharpoondown:"⇁",rightleftharpoons:"⇌",hookrightarrow:"↪",hookleftarrow:"↩",upharpoonright:"\t↾",upharpoonleft:"↿",downharpoonright:"⇂",downharpoonleft:"⇃",leftrightharpoons:"⇋",twoheadleftarrow:"↞",twoheadrightarrow:"↠",Lsh:"↰",Rsh:"↱",leftleftarrows:"⇇",rightrightarrows:"⇉",upuparrows:"⇈",downdownarrows:"⇊",rightleftarrows:"⇄",leftrightarrows:"⇆",Lleftarrow:"⇚",Rrightarrow:"⇛",leftarrowtail:"↢",rightarrowtail:"↣",rightsquigarrow:"⇝",leftrightsquigarrow:"↭",looparrowleft:"↫",looparrowright:"↬",circlearrowleft:"↺",circlearrowright:"↻",curvearrowleft:"↶",curvearrowright:"↷",nleftarrow:"↚",nrightarrow:"↛",nLeftarrow:"⇍",nRightarrow:"⇏",nleftrightarrow:"↮",nLeftrightarrow:"⇎",multimap:"⊸",leadsto:"↝",leftmapsto:"↤",mapsfrom:"↤",upmapsto:"↥",MapsUp:"↥",downmapsto:"↧",MapsDown:"↧",dashedrightarrow:"⇢",dashedleftarrow:"⇠",dasheduparrow:"⇡",dasheddownarrow:"⇣",Nwarrow:"⇖",Nearrow:"⇗",Swarrow:"⇘",Searrow:"⇙",dlsh:"↲",drsh:"↳",LeftArrowBar:"⇤",RightArrowBar:"⇥",pfun:"⇸",ffun:"⇻",leftarrowtriangle:"⇽",rightarrowtriangle:"⇾",leftrightarrowtriangle:"⇿",Longmapsfrom:"⟽ ",Longmapsto:"⟾",Mapsfrom:"⤆",Mapsto:"⤇",UpArrowBar:"⤒",DownArrowBar:"⤓",pinj:"⤔",finj:"⤕",bij:"⤖",leftrightharpoonup:"⥎",rightupdownharpoon:"⥏",leftrightharpoondown:"⥐",leftupdownharpoon:"⥑",LeftVectorBar:"⥒",RightVectorBar:"⥓",RightUpVectorBar:"⥔",RightDownVectorBar:"⥕",DownLeftVectorBar:"⥖",DownRightVectorBar:"⥗",LeftUpVectorBar:"⥘",LeftDownVectorBar:"⥙",LeftTeeVector:"⥚",RightTeeVector:"⥛",RightUpTeeVector:"⥜",RightDownTeeVector:"⥝",DownLeftTeeVector:"⥞",DownRightTeeVector:"⥟",LeftUpTeeVector:"⥠",LeftDownTeeVector:"⥡",leftleftharpoons:"⥢",upupharpoons:"⥣",rightrightharpoons:"⥤",downdownharpoons:"⥥",leftbarharpoon:"⥪",barleftharpoon:"⥫",rightbarharpoon:"⥬",barrightharpoon:"⥭",updownharpoons:"⥮",downupharpoons:"⥯",strictfi:"⥼",strictif:"⥽",twoheaduparrow:"↟",twoheaddownarrow:"↡",leftsquigarrow:"⇜",mp:"∓",setminus:"∖",ast:"∗",circ:"∘",cdot:"∙",propto:"∝",angle:"∠",measuredangle:"∡",sphericalangle:"∢",mid:"∣",divides:"∣",nmid:"∤",ndivides:"∤",wedge:"∧",land:"∧",vee:"∨",lor:"∨",cap:"∩",cup:"∪",int:"∫",oint:"∮",diamond:"⋄",star:"⋆",miniscolon:"∹",sim:"∼",backsim:"∽",wr:"≀",nsim:"≁",eqsim:"≂",simeq:"≃",approx:"≈",nsimeq:"≄",cong:"≅",ncong:"≇",asymp:"≍",neq:"≠",equiv:"≡",nequiv:"≢",leq:"≤",geq:"≥",ll:"≪",gg:"≫",prec:"≺",succ:"≻",top:"⊤",bot:"⊥",bigwedge:"⋀",bigvee:"⋁",bigcap:"⋂",bigcup:"⋃",bowtie:"⋈",oplus:"⊕",ominus:"⊖",otimes:"⊗",oslash:"⊘",odot:"⊙",dotplus:"∔",smallsetminus:"∖",parallel:"∥",nparallel:"∦",iint:"∬",iiint:"∭",circledcirc:"⊚",circledast:"⊛",circleddash:"⊝",boxplus:"⊞",boxminus:"⊟",boxtimes:"⊠",boxdot:"⊡",divideontimes:"⋇",ltimes:"⋉",rtimes:"⋊",leftthreetimes:"⋋",rightthreetimes:"⋌",curlyvee:"⋎",curlywedge:"⋏",between:"≬",approxeq:"≊",Bumpeq:"≎",bumpeq:"≏",Doteq:"≑",fallingdotseq:"≒",risingdotseq:"≓",eqcirc:"≖",circeq:"≗",triangleq:"≜",leqq:"≦",geqq:"≧",lneqq:"≨",gneqq:"≩",nless:"≮",ngtr:"≯",nleq:"≰",ngeq:"≱",lesssim:"≲",gtrsim:"≳",lessgtr:"≶",gtrless:"≷",nlessgtr:"≸",ngtrless:"≹",preccurlyeq:"≼",succcurlyeq:"≼",precsim:"≾",succsim:"≿",nprec:"⊀",nsucc:"⊁",subset:"⊂",supset:"⊃",subseteq:"⊆",supseteq:"⊇",nsubseteq:"⊈",nsupseteq:"⊉",subsetneq:"⊊",supsetneq:"⊋",sqsubset:"⊏",sqsupset:"⊐",sqsubseteq:"⊑",sqsupseteq:"⊒",sqcap:"⊓",sqcup:"⊔",vdash:"⊢",dashv:"⊣",models:"⊧",vDash:"⊨",Vdash:"⊩",Vvdash:"⊪",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",vartriangleleft:"⊲",vartriangleright:"⊳",trianglelefteq:"⊴",unlhd:"⊴",trianglerighteq:"⊵",unrhd:"⊵",intercal:"⊺",veebar:"⊻",barwedge:"⊼",backsimeq:"⋍",Subset:"⋐",Supset:"⋑",Cap:"⋒",doublecap:"⋒",Cup:"⋓",doublecup:"⋓",lessdot:"⋖",gtrdot:"⋗",lll:"⋘",ggg:"⋙",lesseqgtr:"⋚",gtreqless:"⋛",oiint:"∯",dotminus:"∸",nsubset:"⊄",nsupset:"⊅",cupdot:"⊍",VDash:"⊫",nVDash:"⊯",ratio:"∶",coloncolon:"∷",minuscolon:"∹",colonequals:"≔",equalscolon:"≕",hash:"⋕",plus:"+",minus:"−",oiiint:"∰",circledeq:"⊜",nlesssim:"≴",ngtrsim:"≵",barvee:"⊽",forall:"∀",partial:"∂",exists:"∃",nexists:"∄",emptyset:"∅",varnothing:"∅",nabla:"∇",infty:"∞",in:"∈",nin:"∉",notin:"∉",ni:"∋",blacksquare:"∎",prod:"∏",coprod:"∐",sum:"∑",therefore:"∴",because:"∵",complement:"∁",pitchfork:"⋔",owns:"∋",nowns:"∌",rightangle:"∟",varointclockwise:"∲",ointctrclockwise:"∳",notni:"∌",AC:"∿",corresponds:"≙",curlyeqprec:"⋞",curlyeqsucc:"⋟",npreceq:"⋠",nsucceq:"⋡",nsqsubseteq:"⋢",nsqsupseteq:"⋣",lnsim:"⋦",gnsim:"⋧",precnsim:"⋨",succnsim:"⋩",ntriangleleft:"⋪",ntriangleright:"⋫",ntrianglelefteq:"⋬",ntrianglerighteq:"⋭",vdots:"⋮",cdots:"⋯",iddots:"⋰",ddots:"⋱",dotin:"⋵",barin:"⋶",diameter:"⌀",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",invneg:"⌐",wasylozenge:"⌑",triangle:"△",vartriangle:"▵",RHD:"▶",blacktriangleright:"▶",rhd:"▷",smalltriangleright:"▹",bigtriangledown:"▽",blacktriangledown:"▾",triangledown:"▿",smalltriangledown:"▿",LHD:"◀",lhd:"◁",blacktriangleleft:"◂",triangleleft:"◃",smalltriangleleft:"◃",Diamondblack:"◆",Diamond:"◇",lozenge:"◊",Circle:"○",LEFTcircle:"◐",RIGHTcircle:"◑",LEFTCIRCLE:"◖",RIGHTCIRCLE:"◗",boxbar:"◫",square:"◻",bigstar:"★",Sun:"☉",checkmark:"✓",maltese:"✠",perp:"⟂",Lbag:"⟅",Rbag:"⟆",llbracket:"⟦",rrbracket:"⟧",langle:"⟨",rangle:"⟩",lang:"⟪",rang:"⟫",VERT:"⦀",spot:"⦁",Lparen:"⦅",Rparen:"⦆",limg:"⦇",rimg:"⦈",lblot:"⦉",rblot:"⦊",circledbslash:"⦸",clrcledless:"⧀",clrcledgtr:"⧁",boxslash:"⧄",boxbslash:"⧅",boxast:"⧆",boxcircle:"⧇",boxbox:"⧈",LeftTriangleBar:"⧏",RightTriangleBar:"⧐",multimapboth:"⧟",blacklozenge:"⧫",zhide:"⧹",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcap:"⨅",varprod:"⨉",fint:"⨏",Join:"⨝",zcmp:"⨟",zpipe:"⨠",zproject:"⨡",fcmp:"⨾",amalg:"⨿",doublebarwedge:"⩞",dsub:"⩤",rsub:"⩥",Coloneqq:"⩴",Equal:"⩵",Same:"⩶",leqslant:"⩽",geqslant:"⩾",lessapprox:"⪅",gtrapprox:"⪆",lneq:"⪇",gneq:"⪈",lnapprox:"⪉",gnapprox:"⪊",lesseqqgtr:"⪋",gtreqqless:"⪌",eqslantless:"⪕",eqslantgtr:"⪖",leftslice:"⪦",rightslice:"⪧",preceq:"⪯",succeq:"⪰",preceqq:"⪳",succeqq:"⪴",precapprox:"⪷",succapprox:"⪸",precnapprox:"⪹",succnapprox:"⪺",llcurly:"⪻",ggcurly:"⪼",subseteqq:"⫅",supseteqq:"⫆",subsetneqq:"⫋",supsetneqq:"⫌",Top:"⫪",Bot:"⫫",Perp:"⫫",interleave:"⫴",biginterleave:"⫼",sslash:"⫽",varparallel:"⫽",talloblong:"⫾"};const n={mathbf:{A:"𝐀",B:"𝐁",C:"𝐂",D:"𝐃",E:"𝐄",F:"𝐅",G:"𝐆",H:"𝐇",I:"𝐈",J:"𝐉",K:"𝐊",L:"𝐋",M:"𝐌",N:"𝐍",O:"𝐎",P:"𝐏",Q:"𝐐",R:"𝐑",S:"𝐒",T:"𝐓",U:"𝐔",V:"𝐕",W:"𝐖",X:"𝐗",Y:"𝐘",Z:"𝐙",a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",i:"𝐢",j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",s:"𝐬",t:"𝐭",u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳",0:"𝟎",1:"𝟏",2:"𝟐",3:"𝟑",4:"𝟒",5:"𝟓",6:"𝟔",7:"𝟕",8:"𝟖",9:"𝟗","Α":"𝚨","Β":"𝚩","Γ":"𝚪","Δ":"𝚫","Ε":"𝚬","Ζ":"𝚭","Η":"𝚮","Θ":"𝚯","Ι":"𝚰","Κ":"𝚱","Λ":"𝚲","Μ":"𝚳","Ν":"𝚴","Ξ":"𝚵","Ο":"𝚶","Π":"𝚷","Ρ":"𝚸","ϴ":"𝚹","Σ":"𝚺","Τ":"𝚻","Υ":"𝚼","ϒ":"𝚼","Φ":"𝚽","Χ":"𝚾","Ψ":"𝚿","Ω":"𝛀","∇":"𝛁","α":"𝛂","β":"𝛃","γ":"𝛄","δ":"𝛅","ε":"𝛆","ζ":"𝛇","η":"𝛈","θ":"𝛉","ι":"𝛊","κ":"𝛋","λ":"𝛌","μ":"𝛍","ν":"𝛎","ξ":"𝛏","ο":"𝛐","π":"𝛑","ρ":"𝛒","ς":"𝛓","σ":"𝛔","τ":"𝛕","υ":"𝛖","φ":"𝛗","χ":"𝛘","ψ":"𝛙","ω":"𝛚","∂":"𝛛","ϵ":"𝛜","ϑ":"𝛝","ϰ":"𝛞","ϕ":"𝛟","ϱ":"𝛠","ϖ":"𝛡"},mathit:{A:"𝐴",B:"𝐵",C:"𝐶",D:"𝐷",E:"𝐸",F:"𝐹",G:"𝐺",H:"𝐻",I:"𝐼",J:"𝐽",K:"𝐾",L:"𝐿",M:"𝑀",N:"𝑁",O:"𝑂",P:"𝑃",Q:"𝑄",R:"𝑅",S:"𝑆",T:"𝑇",U:"𝑈",V:"𝑉",W:"𝑊",X:"𝑋",Y:"𝑌",Z:"𝑍",a:"𝑎",b:"𝑏",c:"𝑐",d:"𝑑",e:"𝑒",f:"𝑓",g:"𝑔",h:"ℎ",i:"𝑖",j:"𝑗",k:"𝑘",l:"𝑙",m:"𝑚",n:"𝑛",o:"𝑜",p:"𝑝",q:"𝑞",r:"𝑟",s:"𝑠",t:"𝑡",u:"𝑢",v:"𝑣",w:"𝑤",x:"𝑥",y:"𝑦",z:"𝑧","Α":"𝛢","Β":"𝛣","Γ":"𝛤","Δ":"𝛥","Ε":"𝛦","Ζ":"𝛧","Η":"𝛨","Θ":"𝛩","Ι":"𝛪","Κ":"𝛫","Λ":"𝛬","Μ":"𝛭","Ν":"𝛮","Ξ":"𝛯","Ο":"𝛰","Π":"𝛱","Ρ":"𝛲","ϴ":"𝛳","Σ":"𝛴","Τ":"𝛵","Υ":"𝛶","ϒ":"𝛶","Φ":"𝛷","Χ":"𝛸","Ψ":"𝛹","Ω":"𝛺","∇":"𝛻","α":"𝛼","β":"𝛽","γ":"𝛾","δ":"𝛿","ε":"𝜀","ζ":"𝜁","η":"𝜂","θ":"𝜃","ι":"𝜄","κ":"𝜅","λ":"𝜆","μ":"𝜇","ν":"𝜈","ξ":"𝜉","ο":"𝜊","π":"𝜋","ρ":"𝜌","ς":"𝜍","σ":"𝜎","τ":"𝜏","υ":"𝜐","φ":"𝜑","χ":"𝜒","ψ":"𝜓","ω":"𝜔","∂":"𝜕","ϵ":"𝜖","ϑ":"𝜗","ϰ":"𝜘","ϕ":"𝜙","ϱ":"𝜚","ϖ":"𝜛"},mathbfit:{A:"𝑨",B:"𝑩",C:"𝑪",D:"𝑫",E:"𝑬",F:"𝑭",G:"𝑮",H:"𝑯",I:"𝑰",J:"𝑱",K:"𝑲",L:"𝑳",M:"𝑴",N:"𝑵",O:"𝑶",P:"𝑷",Q:"𝑸",R:"𝑹",S:"𝑺",T:"𝑻",U:"𝑼",V:"𝑽",W:"𝑾",X:"𝑿",Y:"𝒀",Z:"𝒁",a:"𝒂",b:"𝒃",c:"𝒄",d:"𝒅",e:"𝒆",f:"𝒇",g:"𝒈",h:"𝒉",i:"𝒊",j:"𝒋",k:"𝒌",l:"𝒍",m:"𝒎",n:"𝒏",o:"𝒐",p:"𝒑",q:"𝒒",r:"𝒓",s:"𝒔",t:"𝒕",u:"𝒖",v:"𝒗",w:"𝒘",x:"𝒙",y:"𝒚",z:"𝒛",0:"𝟎",1:"𝟏",2:"𝟐",3:"𝟑",4:"𝟒",5:"𝟓",6:"𝟔",7:"𝟕",8:"𝟖",9:"𝟗","Α":"𝜜","Β":"𝜝","Γ":"𝜞","Δ":"𝜟","Ε":"𝜠","Ζ":"𝜡","Η":"𝜢","Θ":"𝜣","Ι":"𝜤","Κ":"𝜥","Λ":"𝜦","Μ":"𝜧","Ν":"𝜨","Ξ":"𝜩","Ο":"𝜪","Π":"𝜫","Ρ":"𝜬","ϴ":"𝜭","Σ":"𝜮","Τ":"𝜯","Υ":"𝜰","ϒ":"𝜰","Φ":"𝜱","Χ":"𝜲","Ψ":"𝜳","Ω":"𝜴","∇":"𝜵","α":"𝜶","β":"𝜷","γ":"𝜸","δ":"𝜹","ε":"𝜺","ζ":"𝜻","η":"𝜼","θ":"𝜽","ι":"𝜾","κ":"𝜿","λ":"𝝀","μ":"𝝁","ν":"𝝂","ξ":"𝝃","ο":"𝝄","π":"𝝅","ρ":"𝝆","ς":"𝝇","σ":"𝝈","τ":"𝝉","υ":"𝝊","φ":"𝝋","χ":"𝝌","ψ":"𝝍","ω":"𝝎","∂":"𝝏","ϵ":"𝝐","ϑ":"𝝑","ϰ":"𝝒","ϕ":"𝝓","ϱ":"𝝔","ϖ":"𝝕"},mathscr:{A:"𝒜",B:"ℬ",C:"𝒞",D:"𝒟",E:"ℰ",F:"ℱ",G:"𝒢",H:"ℋ",I:"ℐ",J:"𝒥",K:"𝒦",L:"ℒ",M:"ℳ",N:"𝒩",O:"𝒪",P:"𝒫",Q:"𝒬",R:"ℛ",S:"𝒮",T:"𝒯",U:"𝒰",V:"𝒱",W:"𝒲",X:"𝒳",Y:"𝒴",Z:"𝒵",a:"𝒶",b:"𝒷",c:"𝒸",d:"𝒹",e:"ℯ",f:"𝒻",g:"ℊ",h:"𝒽",i:"𝒾",j:"𝒿",k:"𝓀",l:"𝓁",m:"𝓂",n:"𝓃",o:"ℴ",p:"𝓅",q:"𝓆",r:"𝓇",s:"𝓈",t:"𝓉",u:"𝓊",v:"𝓋",w:"𝓌",x:"𝓍",y:"𝓎",z:"𝓏"},mathcal:{A:"𝓐",B:"𝓑",C:"𝓒",D:"𝓓",E:"𝓔",F:"𝓕",G:"𝓖",H:"𝓗",I:"𝓘",J:"𝓙",K:"𝓚",L:"𝓛",M:"𝓜",N:"𝓝",O:"𝓞",P:"𝓟",Q:"𝓠",R:"𝓡",S:"𝓢",T:"𝓣",U:"𝓤",V:"𝓥",W:"𝓦",X:"𝓧",Y:"𝓨",Z:"𝓩",a:"𝓪",b:"𝓫",c:"𝓬",d:"𝓭",e:"𝓮",f:"𝓯",g:"𝓰",h:"𝓱",i:"𝓲",j:"𝓳",k:"𝓴",l:"𝓵",m:"𝓶",n:"𝓷",o:"𝓸",p:"𝓹",q:"𝓺",r:"𝓻",s:"𝓼",t:"𝓽",u:"𝓾",v:"𝓿",w:"𝔀",x:"𝔁",y:"𝔂",z:"𝔃"},mathfrak:{A:"𝔄",B:"𝔅",C:"ℭ",D:"𝔇",E:"𝔈",F:"𝔉",G:"𝔊",H:"ℌ",I:"ℑ",J:"𝔍",K:"𝔎",L:"𝔏",M:"𝔐",N:"𝔑",O:"𝔒",P:"𝔓",Q:"𝔔",R:"ℜ",S:"𝔖",T:"𝔗",U:"𝔘",V:"𝔙",W:"𝔚",X:"𝔛",Y:"𝔜",Z:"ℨ",a:"𝔞",b:"𝔟",c:"𝔠",d:"𝔡",e:"𝔢",f:"𝔣",g:"𝔤",h:"𝔥",i:"𝔦",j:"𝔧",k:"𝔨",l:"𝔩",m:"𝔪",n:"𝔫",o:"𝔬",p:"𝔭",q:"𝔮",r:"𝔯",s:"𝔰",t:"𝔱",u:"𝔲",v:"𝔳",w:"𝔴",x:"𝔵",y:"𝔶",z:"𝔷"},mathbb:{A:"𝔸",B:"𝔹",C:"ℂ",D:"𝔻",E:"𝔼",F:"𝔽",G:"𝔾",H:"ℍ",I:"𝕀",J:"𝕁",K:"𝕂",L:"𝕃",M:"𝕄",N:"ℕ",O:"𝕆",P:"ℙ",Q:"ℚ",R:"ℝ",S:"𝕊",T:"𝕋",U:"𝕌",V:"𝕍",W:"𝕎",X:"𝕏",Y:"𝕐",Z:"ℤ",a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",j:"𝕛",k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫",0:"𝟘",1:"𝟙",2:"𝟚",3:"𝟛",4:"𝟜",5:"𝟝",6:"𝟞",7:"𝟟",8:"𝟠",9:"𝟡"},mathsf:{A:"𝖠",B:"𝖡",C:"𝖢",D:"𝖣",E:"𝖤",F:"𝖥",G:"𝖦",H:"𝖧",I:"𝖨",J:"𝖩",K:"𝖪",L:"𝖫",M:"𝖬",N:"𝖭",O:"𝖮",P:"𝖯",Q:"𝖰",R:"𝖱",S:"𝖲",T:"𝖳",U:"𝖴",V:"𝖵",W:"𝖶",X:"𝖷",Y:"𝖸",Z:"𝖹",a:"𝖺",b:"𝖻",c:"𝖼",d:"𝖽",e:"𝖾",f:"𝖿",g:"𝗀",h:"𝗁",i:"𝗂",j:"𝗃",k:"𝗄",l:"𝗅",m:"𝗆",n:"𝗇",o:"𝗈",p:"𝗉",q:"𝗊",r:"𝗋",s:"𝗌",t:"𝗍",u:"𝗎",v:"𝗏",w:"𝗐",x:"𝗑",y:"𝗒",z:"𝗓",0:"𝟢",1:"𝟣",2:"𝟤",3:"𝟥",4:"𝟦",5:"𝟧",6:"𝟨",7:"𝟩",8:"𝟪",9:"𝟫"},mathsfbf:{A:"𝗔",B:"𝗕",C:"𝗖",D:"𝗗",E:"𝗘",F:"𝗙",G:"𝗚",H:"𝗛",I:"𝗜",J:"𝗝",K:"𝗞",L:"𝗟",M:"𝗠",N:"𝗡",O:"𝗢",P:"𝗣",Q:"𝗤",R:"𝗥",S:"𝗦",T:"𝗧",U:"𝗨",V:"𝗩",W:"𝗪",X:"𝗫",Y:"𝗬",Z:"𝗭",a:"𝗮",b:"𝗯",c:"𝗰",d:"𝗱",e:"𝗲",f:"𝗳",g:"𝗴",h:"𝗵",i:"𝗶",j:"𝗷",k:"𝗸",l:"𝗹",m:"𝗺",n:"𝗻",o:"𝗼",p:"𝗽",q:"𝗾",r:"𝗿",s:"𝘀",t:"𝘁",u:"𝘂",v:"𝘃",w:"𝘄",x:"𝘅",y:"𝘆",z:"𝘇","Α":"𝝖","Β":"𝝗","Γ":"𝝘","Δ":"𝝙","Ε":"𝝚","Ζ":"𝝛","Η":"𝝜","Θ":"𝝝","Ι":"𝝞","Κ":"𝝟","Λ":"𝝠","Μ":"𝝡","Ν":"𝝢","Ξ":"𝝣","Ο":"𝝤","Π":"𝝥","Ρ":"𝝦","ϴ":"𝝧","Σ":"𝝨","Τ":"𝝩","Υ":"𝝪","Φ":"𝝫","Χ":"𝝬","Ψ":"𝝭","Ω":"𝝮","∇":"𝝯","α":"𝝰","β":"𝝱","γ":"𝝲","δ":"𝝳","ε":"𝝴","ζ":"𝝵","η":"𝝶","θ":"𝝷","ι":"𝝸","κ":"𝝹","λ":"𝝺","μ":"𝝻","ν":"𝝼","ξ":"𝝽","ο":"𝝾","π":"𝝿","ρ":"𝞀","ς":"𝞁","σ":"𝞂","τ":"𝞃","υ":"𝞄","φ":"𝞅","χ":"𝞆","ψ":"𝞇","ω":"𝞈","∂":"𝞉","ϵ":"𝞊","ϑ":"𝞋","ϰ":"𝞌","ϕ":"𝞍","ϱ":"𝞎","ϖ":"𝞏",0:"𝟬",1:"𝟭",2:"𝟮",3:"𝟯",4:"𝟰",5:"𝟱",6:"𝟲",7:"𝟳",8:"𝟴",9:"𝟵"},mathsfit:{A:"𝘈",B:"𝘉",C:"𝘊",D:"𝘋",E:"𝘌",F:"𝘍",G:"𝘎",H:"𝘏",I:"𝘐",J:"𝘑",K:"𝘒",L:"𝘓",M:"𝘔",N:"𝘕",O:"𝘖",P:"𝘗",Q:"𝘘",R:"𝘙",S:"𝘚",T:"𝘛",U:"𝘜",V:"𝘝",W:"𝘞",X:"𝘟",Y:"𝘠",Z:"𝘡",a:"𝘢",b:"𝘣",c:"𝘤",d:"𝘥",e:"𝘦",f:"𝘧",g:"𝘨",h:"𝘩",i:"𝘪",j:"𝘫",k:"𝘬",l:"𝘭",m:"𝘮",n:"𝘯",o:"𝘰",p:"𝘱",q:"𝘲",r:"𝘳",s:"𝘴",t:"𝘵",u:"𝘶",v:"𝘷",w:"𝘸",x:"𝘹",y:"𝘺",z:"𝘻"},mathsfbfit:{A:"𝘼",B:"𝘽",C:"𝘾",D:"𝘿",E:"𝙀",F:"𝙁",G:"𝙂",H:"𝙃",I:"𝙄",J:"𝙅",K:"𝙆",L:"𝙇",M:"𝙈",N:"𝙉",O:"𝙊",P:"𝙋",Q:"𝙌",R:"𝙍",S:"𝙎",T:"𝙏",U:"𝙐",V:"𝙑",W:"𝙒",X:"𝙓",Y:"𝙔",Z:"𝙕",a:"𝙖",b:"𝙗",c:"𝙘",d:"𝙙",e:"𝙚",f:"𝙛",g:"𝙜",h:"𝙝",i:"𝙞",j:"𝙟",k:"𝙠",l:"𝙡",m:"𝙢",n:"𝙣",o:"𝙤",p:"𝙥",q:"𝙦",r:"𝙧",s:"𝙨",t:"𝙩",u:"𝙪",v:"𝙫",w:"𝙬",x:"𝙭",y:"𝙮",z:"𝙯","Α":"𝞐","Β":"𝞑","Γ":"𝞒","Δ":"𝞓","Ε":"𝞔","Ζ":"𝞕","Η":"𝞖","Θ":"𝞗","Ι":"𝞘","Κ":"𝞙","Λ":"𝞚","Μ":"𝞛","Ν":"𝞜","Ξ":"𝞝","Ο":"𝞞","Π":"𝞟","Ρ":"𝞠","ϴ":"𝞡","Σ":"𝞢","Τ":"𝞣","Υ":"𝞤","Φ":"𝞥","Χ":"𝞦","Ψ":"𝞧","Ω":"𝞨","∇":"𝞩","α":"𝞪","β":"𝞫","γ":"𝞬","δ":"𝞭","ε":"𝞮","ζ":"𝞯","η":"𝞰","θ":"𝞱","ι":"𝞲","κ":"𝞳","λ":"𝞴","μ":"𝞵","ν":"𝞶","ξ":"𝞷","ο":"𝞸","π":"𝞹","ρ":"𝞺","ς":"𝞻","σ":"𝞼","τ":"𝞽","υ":"𝞾","φ":"𝞿","χ":"𝟀","ψ":"𝟁","ω":"𝟂","∂":"𝟃","ϵ":"𝟄","ϑ":"𝟅","ϰ":"𝟆","ϕ":"𝟇","ϱ":"𝟈","ϖ":"𝟉"},mathtt:{A:"𝙰",B:"𝙱",C:"𝙲",D:"𝙳",E:"𝙴",F:"𝙵",G:"𝙶",H:"𝙷",I:"𝙸",J:"𝙹",K:"𝙺",L:"𝙻",M:"𝙼",N:"𝙽",O:"𝙾",P:"𝙿",Q:"𝚀",R:"𝚁",S:"𝚂",T:"𝚃",U:"𝚄",V:"𝚅",W:"𝚆",X:"𝚇",Y:"𝚈",Z:"𝚉",a:"𝚊",b:"𝚋",c:"𝚌",d:"𝚍",e:"𝚎",f:"𝚏",g:"𝚐",h:"𝚑",i:"𝚒",j:"𝚓",k:"𝚔",l:"𝚕",m:"𝚖",n:"𝚗",o:"𝚘",p:"𝚙",q:"𝚚",r:"𝚛",s:"𝚜",t:"𝚝",u:"𝚞",v:"𝚟",w:"𝚠",x:"𝚡",y:"𝚢",z:"𝚣",0:"𝟶",1:"𝟷",2:"𝟸",3:"𝟹",4:"𝟺",5:"𝟻",6:"𝟼",7:"𝟽",8:"𝟾",9:"𝟿"}},o={"'":{A:"Á",B:"B́",C:"Ć",D:"D́",E:"É",F:"F́",G:"Ǵ",H:"H́",I:"Í",J:"J́",K:"Ḱ",L:"Ĺ",M:"Ḿ",N:"Ń",O:"Ó",P:"Ṕ",Q:"Q́",R:"Ŕ",S:"Ś",T:"T́",U:"Ú",V:"V́",W:"Ẃ",X:"X́",Y:"Ý",Z:"Ź",a:"á",b:"b́",c:"ć",d:"d́",e:"é",f:"f́",g:"ǵ",h:"h́",i:"í",j:"j́",k:"ḱ",l:"ĺ",m:"ḿ",n:"ń",o:"ó",p:"ṕ",q:"q́",r:"ŕ",s:"ś",t:"t́",u:"ú",v:"v́",w:"ẃ",x:"x́",y:"ý",z:"ź"},"`":{A:"À",B:"B̀",C:"C̀",D:"D̀",E:"È",F:"F̀",G:"G̀",H:"H̀",I:"Ì",J:"J̀",K:"K̀",L:"L̀",M:"M̀",N:"Ǹ",O:"Ò",P:"P̀",Q:"Q̀",R:"R̀",S:"S̀",T:"T̀",U:"Ù",V:"V̀",W:"Ẁ",X:"X̀",Y:"Ỳ",Z:"Z̀",a:"à",b:"b̀",c:"c̀",d:"d̀",e:"è",f:"f̀",g:"g̀",h:"h̀",i:"ì",j:"j̀",k:"k̀",l:"l̀",m:"m̀",n:"ǹ",o:"ò",p:"p̀",q:"q̀",r:"r̀",s:"s̀",t:"t̀",u:"ù",v:"v̀",w:"ẁ",x:"x̀",y:"ỳ",z:"z̀"},"^":{A:"Â",B:"B̂",C:"Ĉ",D:"D̂",E:"Ê",F:"F̂",G:"Ĝ",H:"Ĥ",I:"Î",J:"Ĵ",K:"K̂",L:"L̂",M:"M̂",N:"N̂",O:"Ô",P:"P̂",Q:"Q̂",R:"R̂",S:"Ŝ",T:"T̂",U:"Û",V:"V̂",W:"Ŵ",X:"X̂",Y:"Ŷ",Z:"Ẑ",a:"â",b:"b̂",c:"ĉ",d:"d̂",e:"ê",f:"f̂",g:"ĝ",h:"ĥ",i:"î",j:"ĵ",k:"k̂",l:"l̂",m:"m̂",n:"n̂",o:"ô",p:"p̂",q:"q̂",r:"r̂",s:"ŝ",t:"t̂",u:"û",v:"v̂",w:"ŵ",x:"x̂",y:"ŷ",z:"ẑ"},'"':{A:"Ä",B:"B̈",C:"C̈",D:"D̈",E:"Ë",F:"F̈",G:"G̈",H:"Ḧ",I:"Ï",J:"J̈",K:"K̈",L:"L̈",M:"M̈",N:"N̈",O:"Ö",P:"P̈",Q:"Q̈",R:"R̈",S:"S̈",T:"T̈",U:"Ü",V:"V̈",W:"Ẅ",X:"Ẍ",Y:"Ÿ",Z:"Z̈",a:"ä",b:"b̈",c:"c̈",d:"d̈",e:"ë",f:"f̈",g:"g̈",h:"ḧ",i:"ï",j:"j̈",k:"k̈",l:"l̈",m:"m̈",n:"n̈",o:"ö",p:"p̈",q:"q̈",r:"r̈",s:"s̈",t:"ẗ",u:"ü",v:"v̈",w:"ẅ",x:"ẍ",y:"ÿ",z:"z̈"},"~":{A:"Ã",B:"B̃",C:"C̃",D:"D̃",E:"Ẽ",F:"F̃",G:"G̃",H:"H̃",I:"Ĩ",J:"J̃",K:"K̃",L:"L̃",M:"M̃",N:"Ñ",O:"Õ",P:"P̃",Q:"Q̃",R:"R̃",S:"S̃",T:"T̃",U:"Ũ",V:"Ṽ",W:"W̃",X:"X̃",Y:"Ỹ",Z:"Z̃",a:"ã",b:"b̃",c:"c̃",d:"d̃",e:"ẽ",f:"f̃",g:"g̃",h:"h̃",i:"ĩ",j:"j̃",k:"k̃",l:"l̃",m:"m̃",n:"ñ",o:"õ",p:"p̃",q:"q̃",r:"r̃",s:"s̃",t:"t̃",u:"ũ",v:"ṽ",w:"w̃",x:"x̃",y:"ỹ",z:"z̃"},"=":{A:"Ā",B:"B̄",C:"C̄",D:"D̄",E:"Ē",F:"F̄",G:"Ḡ",H:"H̄",I:"Ī",J:"J̄",K:"K̄",L:"L̄",M:"M̄",N:"N̄",O:"Ō",P:"P̄",Q:"Q̄",R:"R̄",S:"S̄",T:"T̄",U:"Ū",V:"V̄",W:"W̄",X:"X̄",Y:"Ȳ",Z:"Z̄",a:"ā",b:"b̄",c:"c̄",d:"d̄",e:"ē",f:"f̄",g:"ḡ",h:"h̄",i:"ī",j:"j̄",k:"k̄",l:"l̄",m:"m̄",n:"n̄",o:"ō",p:"p̄",q:"q̄",r:"r̄",s:"s̄",t:"t̄",u:"ū",v:"v̄",w:"w̄",x:"x̄",y:"ȳ",z:"z̄"},".":{A:"Ȧ",B:"Ḃ",C:"Ċ",D:"Ḋ",E:"Ė",F:"Ḟ",G:"Ġ",H:"Ḣ",I:"İ",J:"J̇",K:"K̇",L:"L̇",M:"Ṁ",N:"Ṅ",O:"Ȯ",P:"Ṗ",Q:"Q̇",R:"Ṙ",S:"Ṡ",T:"Ṫ",U:"U̇",V:"V̇",W:"Ẇ",X:"Ẋ",Y:"Ẏ",Z:"Ż",a:"ȧ",b:"ḃ",c:"ċ",d:"ḋ",e:"ė",f:"ḟ",g:"ġ",h:"ḣ",i:"i̇",j:"j̇",k:"k̇",l:"l̇",m:"ṁ",n:"ṅ",o:"ȯ",p:"ṗ",q:"q̇",r:"ṙ",s:"ṡ",t:"ṫ",u:"u̇",v:"v̇",w:"ẇ",x:"ẋ",y:"ẏ",z:"ż"},u:{A:"Ă",B:"B̆",C:"C̆",D:"D̆",E:"Ĕ",F:"F̆",G:"Ğ",H:"H̆",I:"Ĭ",J:"J̆",K:"K̆",L:"L̆",M:"M̆",N:"N̆",O:"Ŏ",P:"P̆",Q:"Q̆",R:"R̆",S:"S̆",T:"T̆",U:"Ŭ",V:"V̆",W:"W̆",X:"X̆",Y:"Y̆",Z:"Z̆",a:"ă",b:"b̆",c:"c̆",d:"d̆",e:"ĕ",f:"f̆",g:"ğ",h:"h̆",i:"ĭ",j:"j̆",k:"k̆",l:"l̆",m:"m̆",n:"n̆",o:"ŏ",p:"p̆",q:"q̆",r:"r̆",s:"s̆",t:"t̆",u:"ŭ",v:"v̆",w:"w̆",x:"x̆",y:"y̆"},v:{A:"Ǎ",B:"B̌",C:"Č",D:"Ď",E:"Ě",F:"F̌",G:"Ǧ",H:"Ȟ",I:"Ǐ",J:"J̌",K:"Ǩ",L:"Ľ",M:"M̌",N:"Ň",O:"Ǒ",P:"P̌",Q:"Q̌",R:"Ř",S:"Š",T:"Ť",U:"Ǔ",V:"V̌",W:"W̌",X:"X̌",Y:"Y̌",Z:"Ž",a:"ǎ",b:"b̌",c:"č",d:"ď",e:"ě",f:"f̌",g:"ǧ",h:"ȟ",i:"ǐ",j:"ǰ",k:"ǩ",l:"ľ",m:"m̌",n:"ň",o:"ǒ",p:"p̌",q:"q̌",r:"ř",s:"š",t:"ť",u:"ǔ",v:"v̌",w:"w̌",x:"x̌",y:"y̌",z:"ž"},H:{A:"A̋",B:"B̋",C:"C̋",D:"D̋",E:"E̋",F:"F̋",G:"G̋",H:"H̋",I:"I̋",J:"J̋",K:"K̋",L:"L̋",M:"M̋",N:"N̋",O:"Ő",P:"P̋",Q:"Q̋",R:"R̋",S:"S̋",T:"T̋",U:"Ű",V:"V̋",W:"W̋",X:"X̋",Y:"Y̋",Z:"Z̋",a:"a̋",b:"b̋",c:"c̋",d:"d̋",e:"e̋",f:"f̋",g:"g̋",h:"h̋",i:"i̋",j:"j̋",k:"k̋",l:"l̋",m:"m̋",n:"n̋",o:"ő",p:"p̋",q:"q̋",r:"r̋",s:"s̋",t:"t̋",u:"ű",v:"v̋",w:"w̋",x:"x̋",y:"y̋",z:"z̋"},c:{A:"A̧",B:"B̧",C:"Ç",D:"Ḑ",E:"Ȩ",F:"F̧",G:"Ģ",H:"Ḩ",I:"I̧",J:"J̧",K:"Ķ",L:"Ļ",M:"M̧",N:"Ņ",O:"O̧",P:"P̧",Q:"Q̧",R:"Ŗ",S:"Ş",T:"Ţ",U:"U̧",V:"V̧",W:"W̧",X:"X̧",Y:"Y̧",Z:"Z̧",a:"a̧",b:"b̧",c:"ç",d:"ḑ",e:"ȩ",f:"f̧",g:"ģ",h:"ḩ",i:"i̧",j:"j̧",k:"ķ",l:"ļ",m:"m̧",n:"ņ",o:"o̧",p:"p̧",q:"q̧",r:"ŗ",s:"ş",t:"ţ",u:"u̧",v:"v̧",w:"w̧",x:"x̧",y:"y̧",z:"z̧"},d:{A:"Ạ",B:"Ḅ",C:"C̣",D:"Ḍ",E:"Ẹ",F:"F̣",G:"G̣",H:"Ḥ",I:"Ị",J:"J̣",K:"Ḳ",L:"Ḷ",M:"Ṃ",N:"Ṇ",O:"Ọ",P:"P̣",Q:"Q̣",R:"Ṛ",S:"Ṣ",T:"Ṭ",U:"Ụ",V:"Ṿ",W:"Ẉ",X:"X̣",Y:"Ỵ",Z:"Ẓ",a:"ạ",b:"ḅ",c:"c̣",d:"ḍ",e:"ẹ",f:"f̣",g:"g̣",h:"ḥ",i:"ị",j:"j̣",k:"ḳ",l:"ḷ",m:"ṃ",n:"ṇ",o:"ọ",p:"p̣",q:"q̣",r:"ṛ",s:"ṣ",t:"ṭ",u:"ụ",v:"ṿ",w:"ẉ",x:"x̣",y:"ỵ",z:"ẓ"},r:{A:"Å",B:"B̊",C:"C̊",D:"D̊",E:"E̊",F:"F̊",G:"G̊",H:"H̊",I:"I̊",J:"J̊",K:"K̊",L:"L̊",M:"M̊",N:"N̊",O:"O̊",P:"P̊",Q:"Q̊",R:"R̊",S:"S̊",T:"T̊",U:"Ů",V:"V̊",W:"W̊",X:"X̊",Y:"Y̊",Z:"Z̊",a:"å",b:"b̊",c:"c̊",d:"d̊",e:"e̊",f:"f̊",g:"g̊",h:"h̊",i:"i̊",j:"j̊",k:"k̊",l:"l̊",m:"m̊",n:"n̊",o:"o̊",p:"p̊",q:"q̊",r:"r̊",s:"s̊",t:"t̊",u:"ů",v:"v̊",w:"ẘ",x:"x̊",y:"ẙ",z:"z̊"}},r={A:"ᴬ",B:"ᴮ",D:"ᴰ",E:"ᴱ",G:"ᴳ",H:"ᴴ",I:"ᴵ",J:"ᴶ",K:"ᴷ",L:"ᴸ",M:"ᴹ",N:"ᴺ",O:"ᴼ",P:"ᴾ",R:"ᴿ",T:"ᵀ",U:"ᵁ",V:"ⱽ",W:"ᵂ",a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ⁱ",j:"⁲",k:"ᵏ",l:"ˡ",m:"ᵐ",n:"ⁿ",o:"ᵒ",p:"ᵖ",r:"ʳ",s:"ˢ",t:"ᵗ",u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ",0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹","+":"⁺","-":"⁻","=":"⁼","(":"⁽",")":"⁾","ɐ":"ᵃ","α":"ᵅ","ɒ":"ᶛ","Æ":"ᴭ","æ":"ᵆ","β":"ᵝ","ɕ":"ᶝ","ð":"ᶞ","γ":"ᵞ","δ":"ᵟ","ε":"ᵋ","Ǝ":"ᴲ","ǝ":"ᵊ","ɟ":"ᶡ","ɥ":"ᶣ","ɨ":"ᶤ","ι":"ᶥ","ᴉ":"ᵎ","Ɨ":"ᶧ","ɭ":"ᶩ","ᶅ":"ᶪ","ɱ":"ᶬ","ɰ":"ᶭ","И":"ᴻ","ɲ":"ᶮ","ɳ":"ᶯ","ɴ":"ᶰ","ŋ":"ᵑ","ɵ":"ᶱ","ɔ":"ᵓ","ᴖ":"ᵔ","ᴗ":"ᵕ","ϕ":"ᶲ","φ":"ᵠ","ʂ":"ᶳ","ʃ":"ᶴ","ʉ":"ᶶ","ʊ":"ᶷ","ᴝ":"ᵙ","ʋ":"ᶹ","ʌ":"ᶺ","χ":"ᵡ","ʐ":"ᶼ","ʑ":"ᶽ","ʒ":"ᶾ","θ":"ᶿ"},s={a:"ₐ",e:"ₑ",h:"ₕ",i:"ᵢ",j:"ⱼ",k:"ₖ",l:"ₗ",m:"ₘ",n:"ₙ",o:"ₒ",p:"ₚ",r:"ᵣ",s:"ₛ",t:"ₜ",u:"ᵤ",v:"ᵥ",x:"ₓ",0:"₀",1:"₁",2:"₂",3:"₃",4:"₄",5:"₅",6:"₆",7:"₇",8:"₈",9:"₉","+":"₊","-":"₋","=":"₌","(":"₍",")":"₎","β":"ᵦ","γ":"ᵧ","ρ":"ᵨ","φ":"ᵩ","χ":"ᵪ"};class i{constructor(){this.value=""}}class a extends i{consume(e){const t=/\\|_|\^|\{|\}/g,{value:n,originalCursorPosition:o}=e;let{inputPosition:r}=e,s=!1,i=0;for(;;){t.lastIndex=r;const o=t.exec(n);if(null==o)break;const a=o[0];if("\\"===a[0]){this.value+=n.substring(r,o.index),e.inputPosition=o.index;const t=new c,i=t.consume(e);r=e.inputPosition,i.consumed?(this.value+=t.value,s=s||i.changed):(this.value+="\\",r=o.index+1)}else if("^"===a){this.value+=n.substring(r,o.index),e.inputPosition=o.index+1;const t=p(e,new h);this.value+=t.value,r=e.inputPosition,t.changed&&e.inputPosition<=e.originalCursorPosition&&e.cursorPosition--,s=s||t.changed}else if("_"===a){this.value+=n.substring(r,o.index),e.inputPosition=o.index+1;const t=p(e,new d);this.value+=t.value,r=e.inputPosition,t.changed&&e.inputPosition<=e.originalCursorPosition&&e.cursorPosition--,s=s||t.changed}else if("{"===a)i++,this.value+=n.substring(r,o.index+1),r=o.index+1;else if("}"===a)if(i>0)i--,this.value+=n.substring(r,o.index+1),r=o.index+1;else{if(this.value+=n.substring(r,o.index),r=o.index,this.handleBlockEnd())return e.inputPosition=r+1,{consumed:!0,changed:s,blockComplete:!0};this.value+="}",r++}else{const e=o.index+a.length;this.value+=n.substring(r,e),r=e}}return this.value+=n.substring(r),r=n.length,e.inputPosition=r,{consumed:!0,changed:s,blockComplete:!1}}}class l extends a{handleBlockEnd(){return!1}}class c extends i{consume(e){const{value:r,inputPosition:s,originalCursorPosition:i}=e,a=/\\([a-zA-Z]+|[_\'\`\^\"\~\=\.])/y;a.lastIndex=s;const l=a.exec(r);if(null==l)return{consumed:!1,changed:!1};const c=l[0],u=l[1];if(/^[\'\`\^\"\~\=\.uvHcdr]$/.test(u)){const t=o[u];if(null!=t){const n=s+2,o=r[n];if("{"===o){e.inputPosition=n+1;const o=new g,{blockComplete:r,changed:s}=o.consume(e),{value:a}=o;if(r){const o=t[a[0]];return null!=o?(this.value+=o+a.slice(1),n+1<i&&(e.cursorPosition+=o.length-1,e.cursorPosition-=c.length+2),{consumed:!0,changed:!0}):(this.value+=a,{consumed:!0,changed:s})}return this.value+=c+"{"+a,{consumed:!0,changed:!1}}{const r=t[o];if(null!=r)return e.inputPosition=n+1,s<i&&(e.cursorPosition+=r.length-c.length-1),this.value+=r,{consumed:!0,changed:!0}}}return{consumed:!1,changed:!1}}const h=t[u];if(null!=h&&i!==s+c.length){this.value+=h;let t=c.length;return" "!==r[e.inputPosition+t]&&" "!==r[e.inputPosition+t]||e.inputPosition+t+1!==i||t++,e.inputPosition+=t,s<i&&(e.cursorPosition+=h.length-t),{consumed:!0,changed:!0}}const d=n[u];if(null!=d){const t=s+c.length;if("{"===r[t]){e.inputPosition=t+1;const n=new g,o=n.consume(e),{value:r}=n,{blockComplete:a}=o;let{changed:l}=o;if(a){s<i&&(e.cursorPosition-=Math.min(i-s,c.length+1));let n=t+1;const o=r.length;for(let t=0;t<o;t++){const o=r[t],s=d[o]||o;this.value+=s,n<i&&(e.cursorPosition+=s.length-o.length),n++,d[o]&&(l=l||!0)}n<i&&e.cursorPosition--}else this.value+=c+"{"+r;return{consumed:!0,changed:l}}}return{consumed:!1,changed:!1}}}class u extends i{constructor(e){super(),this.startchar=e}consume(e){const{value:t,inputPosition:n,originalCursorPosition:o}=e;if(t.length<=n)return this.value+=this.startchar,{consumed:!1,changed:!1};const r=t.charAt(n);if("{"===r){e.inputPosition++;const t=new g,r=t.consume(e);let{value:s}=t;const{blockComplete:i}=r;let{changed:a}=r;if(i){let t="";const r=s.length;n<=o&&e.cursorPosition--;let i=n+1;for(let n=0;n<r;n++){const r=s[n],l=this.convert(r),c=l||r;t+=c,i<o&&(e.cursorPosition+=c.length-r.length),i++,l&&(a=a||!0)}s=t,i<o&&e.cursorPosition--}else s=this.startchar+"{"+s;return this.value+=s,{consumed:!0,changed:a}}if("\\"===r){const t=new c;if(t.consume(e).consumed){const{value:e}=t;if(e.length>0){const t=e[0];this.value+=(this.convert(t)||t)+e.slice(1)}return{consumed:!0,changed:!0}}return this.value+=this.startchar+"\\",e.inputPosition++,{consumed:!0,changed:!1}}const s=this.convert(r);return null!=s?(this.value+=s,e.inputPosition++,n<=o&&(e.cursorPosition-=Math.min(o-n,r.length-s.length)),{consumed:!0,changed:!0}):(this.value+=this.startchar,{consumed:!1,changed:!1})}}class h extends u{constructor(){super("^")}convert(e){return r[e]}}class d extends u{constructor(){super("_")}convert(e){return s[e]}}class g extends a{handleBlockEnd(){return!0}}function p(e,t){const n=t.consume(e),{changed:o,consumed:r}=n;return{value:t.value,consumed:r,changed:o}}function m(e,t){const n={value:e,inputPosition:0,originalCursorPosition:t,cursorPosition:t},o=new l,{value:r,changed:s}=p(n,o);return{value:r,position:n.cursorPosition,changed:s}}function f(e){const t=function(e){if("INPUT"===e.tagName||"TEXTAREA"===e.tagName){const t=e,{value:n,selectionStart:o}=t;return[{type:"input",value:n,cursor:o||0,node:t}]}{const t=window.getSelection(),n=t.getRangeAt(0);if(null==n)return[];const o=[];return function e(t,n,o,r){if(t.nodeType===Node.TEXT_NODE){let e=!1,s=0;if(n.startContainer===t?(e=!0,s=n.startOffset):o.cursorStart?(e=!0,s=0):o.cursorEnd&&(e=!0,s=t.nodeValue.length),e){const e=t.nodeValue||"";/\S/.test(e)&&r.push({type:"text",value:e,cursor:s,node:t,range:n})}}else if(t.nodeType===Node.ELEMENT_NODE){const{childNodes:s}=t,i=s.length;let a=null,l=!1,c=!1;if(n.startContainer===t?(a=n.startOffset,l=!0):o.cursorStart?(a=0,l=!0):o.cursorEnd&&(a=i-1,c=!0),null!=a){const t=s[a];if(null==t)return;e(t,n,{cursorStart:l,cursorEnd:c},r)}else for(let t=0;t<i;t++){const o=s[t];e(o,n,{cursorStart:!1,cursorEnd:!1},r)}}}(e,n,{cursorStart:!1,cursorEnd:!1},o),o}}(e);for(const e of t){const{value:t,cursor:n}=e,{value:o,position:r,changed:s}=m(t,n);if(s)if("input"===e.type){const t=e.node;t.value=o,t.selectionStart=r,t.selectionEnd=r}else{const{node:t,range:n}=e;t.textContent=o;const s=Math.min(o.length,r);n.setStart(t,s),n.setEnd(t,s)}}}function b(){return new Promise(e=>{chrome.storage.local.get("enabled",t=>{t.enabled=!0===t.enabled||null==t.enabled,e(t)})})}function w(e){return chrome.browserAction.setBadgeText({text:e.enabled?"ON":""}),chrome.browserAction.setBadgeBackgroundColor({color:e.enabled?"#007700":"#FF3333"}),e}const v=e=>{f(e.target)};let q=!1;function x(){!1===q&&(q=!0,document.addEventListener("input",v))}function P(e){e?x():!0===q&&(q=!1,document.removeEventListener("input",v))}async function L(){const e=await b();return e.enabled=!e.enabled,await function(e){return new Promise(t=>{chrome.storage.local.set(e,()=>t(e))})}(e)}function k(e){return e?"有効":"無効"}function E(e){const{enabled:t}=e;document.getElementById("main").style.opacity="1",document.getElementById("status").textContent=k(t);const n=document.getElementById("toggle-button");return n.textContent=`${k(!t)}にする`,t?n.classList.add("enabled"):n.classList.remove("enabled"),e}function T(e){return new Promise(t=>{chrome.tabs.query({active:!0},n=>{for(const{id:t}of n)chrome.tabs.sendMessage(t,e);t(e)})})}var B=Object.freeze({run:function(){b().then(E).catch(e=>{console.error(e)}),document.getElementById("toggle-button").addEventListener("click",()=>{L().then(E).then(T).then(w)},!1)}});function D(){b().then(w)}var y=Object.freeze({run:function(){chrome.runtime.onStartup.addListener(D),chrome.runtime.onInstalled.addListener(D)}});e._description="This object is generated by the TeX to Unicode extension.",e.background=y,e.popup=B,e.enable=x,e.run=function(){chrome.storage.local.get("enabled",e=>{const{enabled:t}=e;!0!==t&&null!=t||x()}),chrome.runtime.onMessage.addListener(({enabled:e})=>{P(e)}),document.addEventListener("visibilitychange",()=>{document.hidden||b().then(({enabled:e})=>{P(e)})})},Object.defineProperty(e,"__esModule",{value:!0})});