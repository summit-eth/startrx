$(function() {
	
	
	$("#trx_slider").on("input", function(e) {
		$("#trx_value").val($("#trx_slider").val());
	});
	
	
	$("#trx_value").on("input", function(e) {
		$("#trx_slider").val($("#trx_value").val());
	});

});

(function() {
	'use strict';

	const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_tarif",
				"type": "uint8"
			},
			{
				"name": "_upline",
				"type": "address"
			}
		],
		"name": "unlock",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "contractInfo",
		"outputs": [
			{
				"name": "_invested",
				"type": "uint256"
			},
			{
				"name": "_withdrawn",
				"type": "uint256"
			},
			{
				"name": "_direct_bonus",
				"type": "uint256"
			},
			{
				"name": "_match_bonus",
				"type": "uint256"
			},
			{
				"name": "_launch_date",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "userInfo",
		"outputs": [
			{
				"name": "for_withdraw",
				"type": "uint256"
			},
			{
				"name": "total_invested",
				"type": "uint256"
			},
			{
				"name": "total_withdrawn",
				"type": "uint256"
			},
			{
				"name": "total_match_bonus",
				"type": "uint256"
			},
			{
				"name": "structure",
				"type": "uint256[4]"
			},
			{
				"name": "deposits",
				"type": "uint256[4][100]"
			},
			{
				"name": "unlocked",
				"type": "uint256[4]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_self",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "direct_bonus",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "payoutOf",
		"outputs": [
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tarifs",
		"outputs": [
			{
				"name": "life_days",
				"type": "uint16"
			},
			{
				"name": "percent",
				"type": "uint16"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "launch_date",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_tarif",
				"type": "uint8"
			},
			{
				"name": "_upline",
				"type": "address"
			}
		],
		"name": "deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ref_bonuses",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "match_bonus",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "withdrawn",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "invested",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "players",
		"outputs": [
			{
				"name": "upline",
				"type": "address"
			},
			{
				"name": "dividends",
				"type": "uint256"
			},
			{
				"name": "direct_bonus",
				"type": "uint256"
			},
			{
				"name": "match_bonus",
				"type": "uint256"
			},
			{
				"name": "last_payout",
				"type": "uint256"
			},
			{
				"name": "total_invested",
				"type": "uint256"
			},
			{
				"name": "total_withdrawn",
				"type": "uint256"
			},
			{
				"name": "total_match_bonus",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "upline",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "bonus",
				"type": "uint256"
			}
		],
		"name": "Upline",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tarif",
				"type": "uint8"
			}
		],
		"name": "NewDeposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "MatchPayout",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	}
];

    let contract = null;

    let VueTRON = {
        data() {
            return {
                tron: {	
                    tronWeb: false,
                    auth: false,
                    account: ''
                }
            };
        },
        created() {
            let self = this,
                tries = 0;

            setTimeout(function initTimer() {
                if(!window.tronWeb) return ++tries < 50 ? setTimeout(initTimer, 100) : null;

                self.tron.tronWeb = !!window.tronWeb;

                window.tronWeb.on('addressChanged', function() {
                    self.tron.account = window.tronWeb.defaultAddress.base58;
                });

                setTimeout(function chechAuth() {
                    self.tron.auth = window.tronWeb && window.tronWeb.ready;
                    if(!self.tron.auth) setTimeout(chechAuth, 200);
                    else self.tron.account = window.tronWeb.defaultAddress.base58;
                }, 200);
            }, 100);
        },
        methods: {
            getTronWeb() {
                return new Promise((resolve, reject) => {
                    window.tronWeb ? resolve(window.tronWeb) : reject('TronWeb not found');
                });
            }
        }
    };

	window.App = new Vue({
  		mixins: [VueTRON],
		el: '#App',
		data: {
            default_upline: 'TJFh8yMdcZBwfH6tcyDuLe8jxebSAXb1ZU',
            upline: 'TJFh8yMdcZBwfH6tcyDuLe8jxebSAXb1ZU',
            contract_address: 'TE1xK8TCnYKpj1c6m49BZh6ckmKL47jYYX', // TTzv1Vpnvpqu6wCqzUFZpSVnBrunEiSeGA
            contract: {
                invested: 0,
                withdraw: 0,
                direct_bonus: 0,
                match_bonus: 0,
				launch_date: 1602201600
            },
			current_date: new Date().getTime()/1e3,
            user: {
            	trx: 0,
                for_withdraw: 0,
                total_invested: 0,
                total_withdrawn: 0,
                total_match_bonus: 0,
                structure: [0,0,0],
				deposits: [[0,0,0,0]],
				unlocked: [[0,0,0,0]]
            },
            tarifs: [
            	{days: 30, percent: 210},
            	{days: 25, percent: 250},
            	{days: 25, percent: 300},
            	{days: 14, percent: 400}
            ],
            calc: {
            	tarif: 0,
            	amount: 200,
            	amount1: 500,
            	amount2: 1000,
            	amount3: 2000
            },
            events: []
		},
		mounted() {
			
            let m = location.search.match(/ref=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
            if(m) {
            	this.upline = m[1];
            	document.cookie = "jedi=" + this.upline + "; path=/; expires=" + (new Date(new Date().getTime() + 86400 * 365 * 1000)).toUTCString();
            }

            m = document.cookie.match(/jedi=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
            if(m) this.upline = m[1];

		    if(!document.cookie.match(/startron=1/)) {
		    	this.notice('We use cookies to store temporary data. If you agree to our use of cookies, continue using StarTron.', '000000',  0).then(() => (document.cookie = 'startron=1; Max-Age=31536000; path=/'));
		    }

            setInterval(() => {
                this.getContractInfo();
                this.getUserInfo();
            }, 3000);
		},
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));

                    this.getContractInfo();
                    this.getEventsList();
                    this.getUserInfo();
                });
            }
        },
		methods: {
			// colors: primary = 004e92; success = 4ca1af; warning = f7bb97; error = ef629f
			notice(msg, color = '00ced0', time = 3000) {
				return new Promise((resolve, reject) => {
					let wrap = $('<div style="position:fixed; left:calc(50% - 150px); box-shadow:0 5px 25px rgba(0,0,0,0.2); width:320px; top:40px; background:#' + (color ? color : '00ced0') + '; border-radius:10px; color:#fff; padding:20px 20px; font:14px/1.2 Tahoma, sans-serif; cursor:pointer; z-index:999999; text-align:center;">' + msg + '</div>')
						.on('click', () => { wrap.remove(); resolve(); })
						.appendTo('body');
					if(time) setTimeout(() => { wrap.remove(); }, time);
				});
			},
			copyText(value) {
				let s = document.createElement('input');
				s.value = value;
				document.body.appendChild(s);

				if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
					s.contentEditable = true;
					s.readOnly = false;
					let range = document.createRange();
					range.selectNodeContents(s);
					let sel = window.getSelection();
					sel.removeAllRanges();
					sel.addRange(range);
					s.setSelectionRange(0, 999999);
				} else
					s.select();

				try {
					document.execCommand('copy');
					this.notice('Link copied to clipboard', '00ced0');
				} catch (err) {}

				s.remove();
			},
            getContractInfo() {
                this.getTronWeb().then(tronWeb => {
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    if(contract) {
                        contract.contractInfo().call().then(res => {
                        	this.contract.invested = parseFloat(tronWeb.fromSun(res._invested));
                        	this.contract.withdraw = parseFloat(tronWeb.fromSun(res._withdrawn));
                            this.contract.direct_bonus = parseFloat(tronWeb.fromSun(res._direct_bonus));
                        	this.contract.match_bonus = parseFloat(tronWeb.fromSun(res._match_bonus));
							this.contract.launch_date = res._launch_date;
							this.current_date = Math.round(new Date().getTime()/1e3);
                        });
                    }
                });
            },
            getUserInfo() {
                this.getTronWeb().then(tronWeb => {
                    tronWeb.trx.getBalance(this.tron.account).then(res => {
                        this.user.trx = parseFloat(tronWeb.fromSun(res));
                    });
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    if(contract) {
						contract.userInfo(this.tron.account).call().then(res => {
							this.user.for_withdraw = parseFloat(tronWeb.fromSun(res.for_withdraw));
							this.user.total_invested = parseFloat(tronWeb.fromSun(res.total_invested));
							this.user.total_withdrawn = parseFloat(tronWeb.fromSun(res.total_withdrawn));
							this.user.total_match_bonus = parseFloat(tronWeb.fromSun(res.total_match_bonus));
							this.user.structure = res.structure;
							this.user.deposits = res.deposits;
							this.user.unlocked = res.unlocked;
							console.log(res.unlocked);
						});
                    }
                });
            },
            getEventsList() {
            	fetch('https://api.trongrid.io/v1/contracts/' + this.contract_address + '/events?event_name=&only_confirmed=true&order_by=block_timestamp%2Cdesc').then(r => r.json()).then(res => {
					if(res.data) {
						res.data.forEach(v => {
							this.events.push({
								time: v.block_timestamp,
								type: v.event_name,
								amount: (v.result.amount / 1e6) || 0,
								tx: v.transaction_id
							});
						});
					}
            	});
            },
            deposit(tarif, amount) {
                amount = parseFloat(amount) || 0;
                if(amount >= 200) {
                    this.getTronWeb().then(tronWeb => {
                        this.notice('Confirm transaction', '00ced0');
                        contract.deposit(tarif, this.upline).send({
                            callValue: tronWeb.toSun(amount),
                            shouldPollResponse: true
                        }).then(res => {
                            this.getUserInfo();
                            this.notice('Transaction successful', '00ced0');
                        });
                    });
                } else {
					this.notice('Amount must be greater than 200 trx!');
				}
            },
            unlock(tarif, amount) {
                amount = parseFloat(amount) || 0;
                if(amount >= 200) {
                    this.getTronWeb().then(tronWeb => {
                        this.notice('Confirm transaction', '00ced0');
                        contract.unlock(tarif, this.upline).send({
                            callValue: tronWeb.toSun(amount),
                            shouldPollResponse: true
                        }).then(res => {
                            this.getUserInfo();
                            this.notice('Transaction successful', '00ced0');
                        });
                    });
                }
            },
            withdraw() {
                this.getTronWeb().then(tronWeb => {
                    this.notice('Confirm transaction', '00ced0');
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    contract.withdraw().send({shouldPollResponse: true}).then(res => {
                        this.getUserInfo();
                        this.notice('Transaction successful', '00ced0');
                    });
                });
            }
		}
	});
})();