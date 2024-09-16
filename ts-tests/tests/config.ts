export const GENESIS_ACCOUNT = "0x6be02d1d3665660d22ff9624b7be0551ee1ac91b";
export const GENESIS_ACCOUNT_PRIVATE_KEY = "0x99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342";
export const GENESIS_ACCOUNT_BALANCE = "340282366920938463463374607431768211455";

export const FIRST_CONTRACT_ADDRESS = "0xc2bf5f29a4384b1ab0c063e1c666f02121b6084a";

export const NODE_BINARY_NAME = "splendor-template-node";

export const RUNTIME_SPEC_NAME = "frontier-template";
export const RUNTIME_SPEC_VERSION = 1;
export const RUNTIME_IMPL_VERSION = 1;

export const CHAIN_ID = 9126;
export const BLOCK_TIMESTAMP = 6; // 6 seconds per block
export const BLOCK_HASH_COUNT = 256;
export const EXISTENTIAL_DEPOSIT = 0; // The minimum amount required to keep an account open
export const ETH_BLOCK_GAS_LIMIT = 75000000; // The same configuration as runtime
export const ETH_BLOCK_POV_LIMIT = 5 * 1024 * 1024; // The same configuration as runtime

// ERC20 used to test pov size transfer tests, not meant to be interacted with
export const TEST_ERC20_BYTECODE =
	"0x60806040526001600560146101000a81548160ff0219169083151502179055503480156200002c57600080fd5b50604051" +
	"62001ff138038062001ff18339818101604052810190620000529190620001f3565b81818160039080519060200190620000" +
	"6c929190620000d1565b50806004908051906020019062000085929190620000d1565b50505033600560006101000a815481" +
	"73ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217" +
	"9055505050620003d6565b828054620000df90620002fb565b90600052602060002090601f01602090048101928262000103" +
	"57600085556200014f565b82601f106200011e57805160ff19168380011785556200014f565b828001600101855582156200" +
	"014f579182015b828111156200014e57825182559160200191906001019062000131565b5b5090506200015e919062000162" +
	"565b5090565b5b808211156200017d57600081600090555060010162000163565b5090565b60006200019862000192846200" +
	"028f565b62000266565b905082815260208101848484011115620001b157600080fd5b620001be848285620002c5565b5093" +
	"92505050565b600082601f830112620001d857600080fd5b8151620001ea84826020860162000181565b9150509291505056" +
	"5b600080604083850312156200020757600080fd5b600083015167ffffffffffffffff8111156200022257600080fd5b6200" +
	"023085828601620001c6565b925050602083015167ffffffffffffffff8111156200024e57600080fd5b6200025c85828601" +
	"620001c6565b9150509250929050565b60006200027262000285565b905062000280828262000331565b919050565b600060" +
	"4051905090565b600067ffffffffffffffff821115620002ad57620002ac62000396565b5b620002b882620003c5565b9050" +
	"602081019050919050565b60005b83811015620002e5578082015181840152602081019050620002c8565b83811115620002" +
	"f5576000848401525b50505050565b600060028204905060018216806200031457607f821691505b60208210811415620003" +
	"2b576200032a62000367565b5b50919050565b6200033c82620003c5565b810181811067ffffffffffffffff821117156200" +
	"035e576200035d62000396565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000" +
	"000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000" +
	"000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611c0b80620003e66000396000f3fe60" +
	"8060405234801561001057600080fd5b506004361061012c5760003560e01c80638456cb59116100ad578063a6a97dc11161" +
	"0071578063a6a97dc114610333578063a9059cbb1461034f578063b721ef6e1461037f578063be9a6555146103af578063dd" +
	"62ed3e146103b95761012c565b80638456cb59146102a15780638da5cb5b146102ab57806395d89b41146102c95780639ea1" +
	"85ac146102e7578063a457c2d7146103035761012c565b8063313ce567116100f4578063313ce567146101e9578063395093" +
	"5114610207578063449a52f8146102375780635c975abb1461025357806370a08231146102715761012c565b806306fdde03" +
	"14610131578063095ea7b31461014f57806318160ddd1461017f5780631c78e7981461019d57806323b872dd146101b9575b" +
	"600080fd5b6101396103e9565b6040516101469190611537565b60405180910390f35b610169600480360381019061016491" +
	"90611280565b61047b565b604051610176919061151c565b60405180910390f35b61018761049e565b604051610194919061" +
	"16b9565b60405180910390f35b6101b760048036038101906101b291906112bc565b6104a8565b005b6101d3600480360381" +
	"01906101ce9190611231565b61052f565b6040516101e0919061151c565b60405180910390f35b6101f161055e565b604051" +
	"6101fe91906116d4565b60405180910390f35b610221600480360381019061021c9190611280565b610567565b6040516102" +
	"2e919061151c565b60405180910390f35b610251600480360381019061024c9190611280565b61059e565b005b61025b6105" +
	"fc565b604051610268919061151c565b60405180910390f35b61028b600480360381019061028691906111cc565b61060f56" +
	"5b60405161029891906116b9565b60405180910390f35b6102a9610657565b005b6102b3610704565b6040516102c0919061" +
	"1501565b60405180910390f35b6102d161072a565b6040516102de9190611537565b60405180910390f35b61030160048036" +
	"038101906102fc91906112bc565b6107bc565b005b61031d60048036038101906103189190611280565b61089d565b604051" +
	"61032a919061151c565b60405180910390f35b61034d600480360381019061034891906112bc565b610914565b005b610369" +
	"60048036038101906103649190611280565b6109e6565b604051610376919061151c565b60405180910390f35b6103996004" +
	"80360381019061039491906111cc565b610a09565b6040516103a691906116b9565b60405180910390f35b6103b7610a2156" +
	"5b005b6103d360048036038101906103ce91906111f5565b610ace565b6040516103e091906116b9565b60405180910390f3" +
	"5b6060600380546103f8906117f7565b80601f01602080910402602001604051908101604052809291908181526020018280" +
	"54610424906117f7565b80156104715780601f1061044657610100808354040283529160200191610471565b820191906000" +
	"526020600020905b81548152906001019060200180831161045457829003601f168201915b5050505050905090565b600080" +
	"610486610b55565b9050610493818585610b5d565b600191505092915050565b6000600254905090565b6005601490549061" +
	"01000a900460ff16156104f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081" +
	"526004016104ef906115f9565b60405180910390fd5b60005b8361ffff168161ffff1610156105295761051583836109e656" +
	"5b50808061052190611829565b9150506104fb565b50505050565b60008061053a610b55565b9050610547858285610d2856" +
	"5b610552858585610db4565b60019150509392505050565b60006012905090565b600080610572610b55565b905061059381" +
	"85856105848589610ace565b61058e919061170b565b610b5d565b600191505092915050565b600560149054906101000a90" +
	"0460ff16156105ee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401" +
	"6105e5906115f9565b60405180910390fd5b6105f8828261102c565b5050565b600560149054906101000a900460ff168156" +
	"5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff" +
	"168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffff" +
	"ffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffff" +
	"ffff16146106e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161" +
	"06de90611659565b60405180910390fd5b6001600560146101000a81548160ff021916908315150217905550565b60056000" +
	"9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060048054610739906117f7565b80" +
	"601f0160208091040260200160405190810160405280929190818152602001828054610765906117f7565b80156107b25780" +
	"601f10610787576101008083540402835291602001916107b2565b820191906000526020600020905b815481529060010190" +
	"60200180831161079557829003601f168201915b5050505050905090565b600560149054906101000a900460ff161561080c" +
	"576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610803906115f956" +
	"5b60405180910390fd5b60005b8361ffff168161ffff161015610897578273ffffffffffffffffffffffffffffffffffffff" +
	"ff163373ffffffffffffffffffffffffffffffffffffffff167f7df4d829704e19a12c4538a64d608b12d7b43a60fa92de3a" +
	"91c81c4e9110cd0a8460405161087c91906116b9565b60405180910390a3808061088f90611829565b91505061080f565b50" +
	"505050565b6000806108a8610b55565b905060006108b68286610ace565b9050838110156108fb576040517f08c379a00000" +
	"000000000000000000000000000000000000000000000000000081526004016108f290611679565b60405180910390fd5b61" +
	"09088286868403610b5d565b60019250505092915050565b600560149054906101000a900460ff1615610964576040517f08" +
	"c379a000000000000000000000000000000000000000000000000000000000815260040161095b906115f9565b6040518091" +
	"0390fd5b60005b8361ffff168161ffff1610156109e05781600660008573ffffffffffffffffffffffffffffffffffffffff" +
	"1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109c6919061170b" +
	"565b9250508190555080806109d890611829565b915050610967565b50505050565b6000806109f1610b55565b90506109fe" +
	"818585610db4565b600191505092915050565b60066020528060005260406000206000915090505481565b60056000905490" +
	"6101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16" +
	"3373ffffffffffffffffffffffffffffffffffffffff1614610ab1576040517f08c379a00000000000000000000000000000" +
	"00000000000000000000000000008152600401610aa8906115d9565b60405180910390fd5b6000600560146101000a815481" +
	"60ff021916908315150217905550565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffff" +
	"ffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffff" +
	"ffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509291505056" +
	"5b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffff" +
	"ffffffffff161415610bcd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152" +
	"600401610bc490611639565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffff" +
	"ffffffffffffffffffffffffffffffffff161415610c3d576040517f08c379a0000000000000000000000000000000000000" +
	"000000000000000000008152600401610c3490611579565b60405180910390fd5b80600160008573ffffffffffffffffffff" +
	"ffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084" +
	"73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190" +
	"8152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffff" +
	"ffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610d1b9190" +
	"6116b9565b60405180910390a3505050565b6000610d348484610ace565b90507fffffffffffffffffffffffffffffffffff" +
	"ffffffffffffffffffffffffffffff8114610dae5781811015610da0576040517f08c379a000000000000000000000000000" +
	"0000000000000000000000000000008152600401610d9790611599565b60405180910390fd5b610dad8484848403610b5d56" +
	"5b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffff" +
	"ffffffff161415610e24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260" +
	"0401610e1b90611619565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffff" +
	"ffffffffffffffffffffffffffffffff161415610e94576040517f08c379a000000000000000000000000000000000000000" +
	"0000000000000000008152600401610e8b90611559565b60405180910390fd5b610e9f838383611183565b60008060008573" +
	"ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081" +
	"5260200160002054905081811015610f25576040517f08c379a0000000000000000000000000000000000000000000000000" +
	"000000008152600401610f1c906115b9565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffff" +
	"ffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600080" +
	"8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001" +
	"908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffff" +
	"ffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3" +
	"ef8460405161101391906116b9565b60405180910390a3611026848484611188565b50505050565b600073ffffffffffffff" +
	"ffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561109c576040517f08c379" +
	"a000000000000000000000000000000000000000000000000000000000815260040161109390611699565b60405180910390" +
	"fd5b6110a860008383611183565b80600260008282546110ba919061170b565b92505081905550806000808473ffffffffff" +
	"ffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160" +
	"0020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffff" +
	"ffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161" +
	"116b91906116b9565b60405180910390a361117f60008383611188565b5050565b505050565b505050565b60008135905061" +
	"119c81611b90565b92915050565b6000813590506111b181611ba7565b92915050565b6000813590506111c681611bbe565b" +
	"92915050565b6000602082840312156111de57600080fd5b60006111ec8482850161118d565b91505092915050565b600080" +
	"6040838503121561120857600080fd5b60006112168582860161118d565b92505060206112278582860161118d565b915050" +
	"9250929050565b60008060006060848603121561124657600080fd5b60006112548682870161118d565b9350506020611265" +
	"8682870161118d565b9250506040611276868287016111b7565b9150509250925092565b6000806040838503121561129357" +
	"600080fd5b60006112a18582860161118d565b92505060206112b2858286016111b7565b9150509250929050565b60008060" +
	"00606084860312156112d157600080fd5b60006112df868287016111a2565b93505060206112f08682870161118d565b9250" +
	"506040611301868287016111b7565b9150509250925092565b61131481611761565b82525050565b61132381611773565b82" +
	"525050565b6000611334826116ef565b61133e81856116fa565b935061134e8185602086016117c4565b611357816118b256" +
	"5b840191505092915050565b600061136f6023836116fa565b915061137a826118c3565b604082019050919050565b600061" +
	"13926022836116fa565b915061139d82611912565b604082019050919050565b60006113b5601d836116fa565b91506113c0" +
	"82611961565b602082019050919050565b60006113d86026836116fa565b91506113e38261198a565b604082019050919050" +
	"565b60006113fb6018836116fa565b9150611406826119d9565b602082019050919050565b600061141e6027836116fa565b" +
	"915061142982611a02565b604082019050919050565b60006114416025836116fa565b915061144c82611a51565b60408201" +
	"9050919050565b60006114646024836116fa565b915061146f82611aa0565b604082019050919050565b6000611487601883" +
	"6116fa565b915061149282611aef565b602082019050919050565b60006114aa6025836116fa565b91506114b582611b1856" +
	"5b604082019050919050565b60006114cd601f836116fa565b91506114d882611b67565b602082019050919050565b6114ec" +
	"816117ad565b82525050565b6114fb816117b7565b82525050565b6000602082019050611516600083018461130b565b9291" +
	"5050565b6000602082019050611531600083018461131a565b92915050565b60006020820190508181036000830152611551" +
	"8184611329565b905092915050565b6000602082019050818103600083015261157281611362565b9050919050565b600060" +
	"2082019050818103600083015261159281611385565b9050919050565b600060208201905081810360008301526115b28161" +
	"13a8565b9050919050565b600060208201905081810360008301526115d2816113cb565b9050919050565b60006020820190" +
	"5081810360008301526115f2816113ee565b9050919050565b6000602082019050818103600083015261161281611411565b" +
	"9050919050565b6000602082019050818103600083015261163281611434565b9050919050565b6000602082019050818103" +
	"600083015261165281611457565b9050919050565b600060208201905081810360008301526116728161147a565b90509190" +
	"50565b600060208201905081810360008301526116928161149d565b9050919050565b600060208201905081810360008301" +
	"526116b2816114c0565b9050919050565b60006020820190506116ce60008301846114e3565b92915050565b600060208201" +
	"90506116e960008301846114f2565b92915050565b600081519050919050565b600082825260208201905092915050565b60" +
	"00611716826117ad565b9150611721836117ad565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffff" +
	"ffffffffffffff0382111561175657611755611854565b5b828201905092915050565b600061176c8261178d565b90509190" +
	"50565b60008115159050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffff" +
	"ffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156117e2578082015181" +
	"8401526020810190506117c7565b838111156117f1576000848401525b50505050565b600060028204905060018216806118" +
	"0f57607f821691505b6020821081141561182357611822611883565b5b50919050565b60006118348261177f565b915061ff" +
	"ff82141561184957611848611854565b5b600182019050919050565b7f4e487b710000000000000000000000000000000000" +
	"0000000000000000000000600052601160045260246000fd5b7f4e487b710000000000000000000000000000000000000000" +
	"0000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a20747261" +
	"6e7366657220746f20746865207a65726f206164647260008201527f65737300000000000000000000000000000000000000" +
	"00000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f2061646472" +
	"6560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552" +
	"4332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e" +
	"7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000" +
	"000000000000000000602082015250565b7f4f6e6c79206f776e65722063616e2073746172742069742e0000000000000000" +
	"600082015250565b7f4f6e77657220686173206e6f7420737461727465642074686520636f6e74726160008201527f637420" +
	"7965742e00000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e73" +
	"6665722066726f6d20746865207a65726f20616460008201527f647265737300000000000000000000000000000000000000" +
	"0000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460" +
	"008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4f6e6c79" +
	"206f776e65722063616e2070617573652069742e0000000000000000600082015250565b7f45524332303a20646563726561" +
	"73656420616c6c6f77616e63652062656c6f7760008201527f207a65726f0000000000000000000000000000000000000000" +
	"00000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000" +
	"82015250565b611b9981611761565b8114611ba457600080fd5b50565b611bb08161177f565b8114611bbb57600080fd5b50" +
	"565b611bc7816117ad565b8114611bd257600080fd5b5056fea26469706673582212202a569e0001019cd0f2d7373f42d7f6" +
	"5fa7fdb92963eab5f159138c4e678888de64736f6c6343000802003300000000000000000000000000000000000000000000" +
	"0000000000000000004000000000000000000000000000000000000000000000000000000000000000800000000000000000" +
	"000000000000000000000000000000000000000000000003666f6f0000000000000000000000000000000000000000000000" +
	"0000000000000000000000000000000000000000000000000000000000000000000000000003626172000000000000000000" +
	"0000000000000000000000000000000000000000";
